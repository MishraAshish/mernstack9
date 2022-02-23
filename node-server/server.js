console.log("This file is named as server.js")

const express = require('express')
const app = express()
const port = 9000;

app.get('/getname', function (req, res) {
    res.send('this is coming from getname api')
  })

app.get('/gethtml', function (req, res) {
    res.send("<h1>This is html<h1>")
})

app.get('/', function (req, res) {
  res.send('Hello World - Cody, Kim, Tohney and Hoian')
})

console.log(`Application is listening at port :${port} - localhost:${port}`)
app.listen(port)