const express = require('express')
const request = require('request')
const cors = require('cors')
const path = require('path')
const fs = require('fs')
const axios = require('axios')
const querystring = require('querystring')

const app = express()
app.use(cors())

const clientPath = path.join(__dirname, 'client/build')
const isClientBuilt = fs.existsSync(clientPath)
isClientBuilt && app.use(express.static(clientPath))

isClientBuilt &&
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })

const redirect_uri =
  process.env.REDIRECT_URI || 'http://localhost:3001/callback'
const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET
const port = process.env.PORT || 3001

const scope = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-modify-playback-state',
]

const sendAxiosError = (res) => (error) =>
  res.status(error.response.status || 500).json(error.response.data)

app.get('*', (req, res, next) => {
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  next()
})

// get request >> redirect to spotify login page
app.get('/login', function (req, res) {
  res.redirect(
    'https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
      })
  )
})

// get token and refresh token
app.get('/callback', function (req, res) {
  const code = req.query.code || null
  const authOptions = {
    uri: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: redirect_uri,
      grant_type: 'authorization_code',
    },
    headers: {
      Authorization:
        'Basic ' +
        new Buffer(client_id + ':' + client_secret).toString('base64'),
    },
    json: true,
  }
  request.post(authOptions, function (error, response, body) {
    if (!error && res.statusCode === 200) {
      let access_token = body.access_token,
        refresh_token = body.refresh_token
      const options = {
        uri: 'https://api.spotify.com/v1/me',
        headers: { Authorization: 'Bearer ' + access_token },
        json: true,
      }
      // use the access token to access the Spotify Web API
      request.get(options, function (error, response, body) {
        console.log(body)
      })
      // we can also pass the token to the browser to make requests from there
      res.redirect(
        '/#' +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token,
          })
      )
    } else {
      res.redirect(
        '/#' +
          querystring.stringify({
            error: 'invalid_token',
          })
      )
    }
  })
})

app.get('/refresh_token', function (req, res) {
  // requesting access token from refresh token
  const refresh_token = req.query.refresh_token
  const authOptions = {
    uri: 'https://accounts.spotify.com/api/token',
    headers: {
      Authorization:
        'Basic ' +
        new Buffer(client_id + ':' + client_secret).toString('base64'),
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
    },
    json: true,
  }
  request.post(authOptions, function (error, res, body) {
    if (!error && res.statusCode === 200) {
      const access_token = body.access_token
      res.send({
        access_token: access_token,
      })
    }
  })
})

// get profile data
app.get('/profile', (req, res) => {
  axios
    .get('https://api.spotify.com/v1/me')
    .then((result) => {
      res.json(result.data)
    })
    .catch(sendAxiosError(res))
})

app.listen(port, () => {
  console.log(
    `Server listening at ${port}, got to http://localhost:${port}/login to start authorization flow.`
  )
})
