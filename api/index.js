const express = require('express')
const axios = require('axios')

const app = express()

const sendAxiosError = (res) => (error) =>
  res.status(error.response.status || 500).json(error.response.data)

// get profile data
app.get('/profile', (req, res) => {
  axios
    .get('https://api.spotify.com/v1/me')
    .then((result) => {
      res.json(result.data)
    })
    .catch(sendAxiosError(res))
})

module.exports = app
