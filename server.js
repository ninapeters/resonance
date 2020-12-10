const express = require('express')
const cors = require('cors')
const path = require('path')
const fs = require('fs')

const app = express()
app.use(cors())

const clientPath = path.join(__dirname, 'client/build')
const isClientBuilt = fs.existsSync(clientPath)
isClientBuilt && app.use(express.static(clientPath))

isClientBuilt &&
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })

const port = process.env.PORT || 3001

const SpotifyWebApi = require('spotify-web-api-node')
const scopes = [
  'user-read-private',
  'user-read-email',
  'playlist-modify-public',
  'playlist-modify-private',
]

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
})

/* GET home page. */
app.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

app.get('/login', (req, res) => {
  res.redirect(spotifyApi.createAuthorizeURL(scopes))
})

app.get('/callback', (req, res) => {
  const error = req.query.error
  const code = req.query.code
  const state = req.query.state

  if (error) {
    console.error('Callback Error:', error)
    res.send(`Callback Error: ${error}`)
    return
  }

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      const access_token = data.body['access_token']
      const refresh_token = data.body['refresh_token']
      const expires_in = data.body['expires_in']

      spotifyApi.setAccessToken(access_token)
      spotifyApi.setRefreshToken(refresh_token)

      console.log('access_token:', access_token)
      console.log('refresh_token:', refresh_token)

      console.log(
        `Sucessfully retreived access token. Expires in ${expires_in} s.`
      )
      res.redirect('http://localhost:3000/home')

      setInterval(async () => {
        const data = await spotifyApi.refreshAccessToken()
        const access_token = data.body['access_token']

        console.log('The access token has been refreshed!')
        console.log('access_token:', access_token)
        spotifyApi.setAccessToken(access_token)
      }, (expires_in / 2) * 1000)
    })
    .catch((error) => {
      console.error('Error getting Tokens:', error)
      res.send(`Error getting Tokens: ${error}`)
    })
})

app.listen(port, () => {
  console.log(
    `Server listening at ${port}, got to http://localhost:${port}/login to start authorization flow.`
  )
})
