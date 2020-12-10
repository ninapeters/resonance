const express = require('express')

const SpotifyWebApi = require('spotify-web-api-node')
const spotifyApi = new SpotifyWebApi()

const app = express()

app.get('/api/track', (req, res) => {
  spotifyApi.searchTracks('Love').then(
    function (data) {
      console.log('Search by "Love"', data.body)
    },
    function (err) {
      console.error(err)
    }
  )
})

module.exports = app
