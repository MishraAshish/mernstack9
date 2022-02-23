console.log("This file is named as server.js")

const express = require('express')
const app = express()

app.get('/getname', function (req, res) {
    res.send('this is coming from getname api')
  })

app.get('/', function (req, res) {
  res.send('Hello World - Cody, Kim, Tohney and Hoian')
})

console.log("Application is listening at port :3000 - localhost:3000")
app.listen(3000)