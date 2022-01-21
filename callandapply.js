//call : is used to change the context of any function at runtime, and then it executes the function immediately

// name = "outer name"

var SessionInfo = {name : "CoreJS", duration : "10 days", concepts: " Multiple"}
var SessionInfo2 = {name : "CoreJS2", duration : "12 days", concepts: " None"}


function PrintSessionInfo(timings, param2, param3, param4, param5) {
    console.log(this.name)
    console.log(this.duration)

    console.log(timings)
    console.log(param2)
    console.log(param3)
    console.log(param4)
    console.log(param5)
}

PrintSessionInfo.call(SessionInfo,"1hr daily","2hr daily","3hr daily","4hr daily","5hr daily")
PrintSessionInfo.call(SessionInfo2,"1hr daily","2hr daily","3hr daily","4hr daily","5hr daily")


//apply : is used the same way call is used but, we can pass the parameters in the form of array

// Apply : is the inbuilt method used to change the context of a function at runtime, but it accepts function parameters in array format

var BMW = {name : "BMW", hatchback : "Yes", price : "2000", openRoof : "Yes"}
var SomeCar = {name : "Toyota", hatchback : "No", price : "1000", openRoof : "No"}

function GetVehicleInfo(authorised, noOfWheels, crashTest, highSpeed, countryMake) {
    console.log(`
        Vehicle Name ${this.name}
        Vehicle hatchback ${this.hatchback}
        Vehicle price ${this.price}
        Vehicle openRoof ${this.openRoof}
    `)

    console.log(`
        Vehicle authorised ${authorised}
        Vehicle noOfWheels ${noOfWheels}
        Vehicle crashTest ${crashTest}
        Vehicle highSpeed ${highSpeed}
        Vehicle countryMake ${countryMake}
    `)
}

GetVehicleInfo.apply(BMW,["Yes","5","4","Yes","China"])
GetVehicleInfo.apply(SomeCar,["Yes","5","4","Yes","China"])



// function TestMe(params) {
//     console.log("this ", this)   
// }

// TestMe();


var User = {
    name : "some name",
    getName : function () {
        console.log("this ", this)
        console.log("name - outer ", this.name);

        // setTimeout(function () {
        //     console.log("name - inner ", this.name)
        // }, 1000)
    }
}

User.getName()

// setTimeout(function () {
//     console.log("this ", this)
// }, 1000)