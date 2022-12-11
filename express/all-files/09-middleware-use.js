const express = require('express')
const app = express()
const logger = require('./logger/logger')
const authorise = require('./logger/authorise')

//  req => middleware => res

app.use([logger,authorise])

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products',  (req, res) => {
  res.send('Maal')
})
app.get('/api/items', (req, res) => {
  res.send('item')
})
app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})