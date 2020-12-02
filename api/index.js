/* const express = require('express')
const axios = require('axios')

const app = express()
const apiKey = process.env.API_KEY

const sendAxiosError = (res) => (error) =>
  res.status(error.response.status || 500).json(error.response.data)

app.get('*', (req, res, next) => {
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  next()
})

module.exports = app
 */