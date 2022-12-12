const express = require('express')
const app = express()
let { people } = require('./data')

// static assets
app.use(express.static('./all-files/methods-public'))
// app.use(express.static('./public'))


app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})