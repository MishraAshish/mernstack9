// default params - are the parameter values that we set as default at the time of function definition

// var name = undefined
// var price = undefined
// var brandValue = undefined

function GetVehicleDetails(name = "Default Vehicle", price = "$0", brandValue = "Default Normal") {
    console.log(`
        Name : ${name}
        Price : ${price}
        Brand Value : ${brandValue}    
    `)
}

GetVehicleDetails("Lamborgini", "$5000", "Amazing")
GetVehicleDetails("Toyota")
GetVehicleDetails()

function Divide(param1 = 1, param2 = 1) {
    //return isNaN(param1/param2);
    return param1/param2;
}

console.log(Divide(8,2))
console.log(Divide(8))

// create two functions for sum and multiply to do sum and multiplication of two numbers with default params default value should be 100 for each