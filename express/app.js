const http = require('http')
const { readFileSync } = require('fs')

// get all files 
const homePage = readFileSync('./all-files/navbar-app/index.html')
const homeStyle = readFileSync('./all-files/navbar-app/styles.css')
const homeLogo = readFileSync('./all-files/navbar-app/logo.svg')
const homeLogic = readFileSync('./all-files/navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
// css
   else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyle)
    res.end()
  }
// logo
else if (url === '/logo.svg') {
  res.writeHead(200, { 'content-type': 'image/svg+xml' })
  res.write(homeLogo)
  res.end()
}  
// logo
else if (url === '/browser-app.js') {
  res.writeHead(200, { 'content-type': 'application/javascript' })
  res.write(homeLogic)
  res.end()
}  
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)