const express = require('express')

const SpotifyWebApi = require('spotify-web-api-node')
const spotifyApi = new SpotifyWebApi()

const app = express()

app.get('/api/track', async (req, res) => {
  try {
    var result = await spotifyApi.searchTracks('Love')
    console.log(result.body)
    res.status(200).send(result.body)
  } catch (err) {
    res.status(400).send(err)
  }
})

module.exports = app
