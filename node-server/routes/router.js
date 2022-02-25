//this page is used to create basic routers for application

let express = require('express');
let router = express.Router({caseSensitive:true})//caseSensitive:true

//http://localhost:9000/qs?name=cody hall&age=19&session=express
router.get('/qs', function (req, res) { //query string from client (browser url => ? &)
    const qsData = req.query;
    res.json(qsData)
})

router.get('/', function (req, res) {
    res.send('Hello World - Cody, Kim, Tohney and Hoian')
})
  
router.get('*', function (req, res) {
    res.send('Default Response')
})

module.exports = router;