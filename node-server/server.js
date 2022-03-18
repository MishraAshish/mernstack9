const express = require('express'); // imported express module or top level class of express
const port = 9000;
const app = express(); //by invoking top level class we are initilizing the application
const router = require("./routes/router");
const cors = require("cors");
const adminRouter = require('./routes/adminrouter');
const userRouter = require('./routes/userRouter.js');

const adminApp = express();
const userApp = express();

app.use(cors());//this middleware we are setting to make all api's accept request from other domain or port(localhost:9092)
app.use('/static', express.static('public')); // serve static files like images css using static middle ware

app.use(express.json({limit:'2mb', extended:false})); //json middle-ware for setting request content type
app.use("/admin", adminApp); //mounting to admin app
adminApp.use("/",adminRouter); //routing the /admin requests to admin route table

app.use("/user", userApp); //mounting to admin app
userApp.use("/",userRouter); //routing the /admin requests to admin route table

app.use("/", router);

console.log(`we are listening on port ${port} with url http://localhost:9000`)
app.listen(port)

//split out all the routes that we have created so far in router and student router
//also include mounting of express application



//like - nolike or like => table (bool - true/false) => columns (5)
//new-like(reaction) => like, celebrate, support, etc

//table - userInfo 
//userInfo => Addresses => (Address Table (addressid))

//document db
// {
//     userinfo : //
//     address : [
//         address1 : "",
//         address2 : "",
//         address3 : "",
//     ]
// }