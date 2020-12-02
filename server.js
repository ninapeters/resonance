const app = require('./api/index')
const port = process.env.PORT || 8888
const express = require('express')
const path = require('path')

// Handle React routing, return all requests to React app
app.use(express.static(path.join(__dirname, 'client/build')))


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

