const app = require('./api/index')
const express = require('express')
const request = require('request')
const cors = require('cors')
const path = require('path')
const axios = require('axios')
const querystring = require('querystring')

app.use(express.static(path.join(__dirname, 'client/build')))
app.use(cors())

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

const app = express()

const port = process.env.PORT || 3001
const redirect_uri = process.env.REDIRECT_URI || "http://localhost:3000/callback"
const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET

const scope = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-modify-playback-state",
];

const sendAxiosError = (res) => (error) =>
  res.status(error.response.status || 500).json(error.response.data)

app.get('*', (req, res, next) => {
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  next()
})

// get request >> redirect to spotify login page
app.get('/login', function(req, res) {
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
    })
  )
})

// get request >> get token
app.get('/callback', function(req, res) {
  const code = req.query.code || null
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer.alloc(
        client_id + ':' + client_secret
      ).toString('base64'))
    },
    json: true
  }
})

// post request >> show token in URL
request.post(authOptions, function(error, response, body) {
  const access_token = body.access_token
  const uri = 'http://localhost:3000'
  res.redirect(uri + '?access_token=' + access_token)
})

// get request >> profile data
app.get('/profile', (req, res) => {
  axios
    .get('https://api.spotify.com/v1/me')
    .then((result) => {
      res.json(result.data)
    })
    .catch(sendAxiosError(res))
})

app.listen(port, () => {
  console.log(`Server listening at ${port}, got to http://localhost:${port}/login to start authorization flow.`)
})
