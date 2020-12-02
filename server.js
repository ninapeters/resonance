const cors = require("cors")
const express = require('express')
const request = require('request')
const querystring = require('querystring')
const cookieParser = require('cookie-parser');
const axios = require('axios')

const stateKey = 'spotify_auth_state';
const app = express()
app.use(cors())
app.use(cookieParser())

const redirect_uri = 
  process.env.REDIRECT_URI || 
  'http://localhost:8888/callback'

const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET
const port = process.env.PORT || 8888

app.get('/login', function(req, res) {

  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id,
      scope: 'user-read-private user-read-email',
      redirect_uri
    }))
})

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
      'Authorization': 'Basic ' + (new Buffer(
        client_id + ':' + client_secret
      ).toString('base64'))
    },
    json: true
  }
request.post(authOptions, function(error, response, body) {
    const access_token = body.access_token
    const uri = 'http://localhost:3000'
    res.redirect(uri + '?access_token=' + access_token)
  })
})

console.log(`Server listening at http://localhost:${port}.`)
app.listen(port)