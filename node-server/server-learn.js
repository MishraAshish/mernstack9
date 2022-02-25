const express = require('express'); //importing express module - complete module
const app = express() //we invoke top level function to create an express application
const port = 9000;
const adminApp = express(); // created admin application 

// serve static files like images css using static middleware
//app.use("/static", express.static("public"))
app.use("/static", express.static("public"))

app.get("/explorerequest", (req, res)=>{
    console.log("Request Object ", req);

    res.send("Response")
})

//http://localhost:9000/qs?name=cody hall&age=19&session=express
app.get('/qs', function (req, res) { //query string from client (browser url => ? &)
    const qsData = req.query;
    res.json(qsData)
})

//route params => http://localhost:9000/product/29/details
app.get('/product/:id/details', function (req, res) { //:id - is refered as route parameter
  const routeParam = req.params["id"];
  if (routeParam >= 25) {
    res.json({
      name : "New Product",
      availability : "Available",
      productId : routeParam
    })
  } else {
    res.json({
      availability : "Not Available",
      productId : routeParam
    })
  }
})

app.get('/getname', function (req, res) {
    res.send('this is coming from getname api')
})

app.get('/gethtml', function (req, res) {
    res.send("<h1>This is html<h1>")
})

app.get('/getfile', function (req, res) {
    res.sendFile(__dirname+"/public/index.html")
})

// app.get('/public/renderdone.js', function (req, res) {
//     res.sendFile(__dirname+"/public/renderdone.js")
// })


//application mounting process in express
app.use("/admin",adminApp);

adminApp.get("/Details",(req, res)=>{
    res.json({
      appName : "admin",
      approle : "Execute admin task"
    })
})

adminApp.get("/helloadmin",(req, res)=>{
  res.send("Hello Admin!")
})


app.get('/', function (req, res) {
  res.send('Hello World - Cody, Kim, Tohney and Hoian')
})

// app.get('*', function (req, res) {
//     res.send('Default Response')
//   })
  

console.log(`Application is listening at port :${port} - localhost:${port}`)
app.listen(port)

//create an api to save student details in a file - where we'll get student info like - name, age, session, etc from query string
//create another api to fetch student details from a file in json object - if student id is less 
//than 50 it should return the info saved in prev api, using routeparam

//create a mounted application with name student to get student details