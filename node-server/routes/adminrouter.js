//this page is used to create admin routers for application

let express = require('express');
let adminRouter = express.Router({})//
let adminModel = require('../datamodel/adminDataModel');

//http://localhost:9000/admin/create?age=21&session=mongodb&address=somewhere%20on%20us&name=kim&allow=true
adminRouter.get("/create",(req, res)=>{
  //req.query ==> name,age,session,address ?

  let adminObj = new adminModel(req.query)
  
  adminObj.save((err, data)=>{
      if (err) {
        console.log('err ', err)
        res.send('error occured')
      } else {
        res.json(data) //_id alongwith req.query data is passed
      }
  })
})

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