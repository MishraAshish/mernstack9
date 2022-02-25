//this page is used to create admin routers for application

let express = require('express');
let adminRouter = express.Router({})//

adminRouter.get("/Details",(req, res)=>{
    res.json({
      appName : "admin",
      approle : "Execute admin task"
    })
})

adminRouter.get("/helloadmin",(req, res)=>{
  res.send("Hello Admin!")
})

module.exports = adminRouter;