const cors = require("cors")
const express = require('express')
const request = require('request')
const querystring = require('querystring')

const app = express()
app.use(cors())

const redirect_uri = 
  process.env.REDIRECT_URI || 
  'http://localhost:8888/callback'

const client_id = process.env.CLIENT_ID
console.log(client_id)
const client_secret = process.env.CLIENT_SECRET
const port = process.env.PORT || 8888

app.get('/login', function(req, res) {
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id,
      scope: 'user-read-private user-read-email',
      redirect_uri
    }))
})

app.get('/callback', function(req, res) {
  let code = req.query.code || null
  let authOptions = {
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
    let access_token = body.access_token
    const uri = 'http://localhost:3000'
    res.redirect(uri + '?access_token=' + access_token)
  })
})

console.log(`Server listening at http://localhost:${port}.`)
app.listen(port)