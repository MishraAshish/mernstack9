//Hoisting : A phenomenon when we are able to get the values in variables or functions even before they are decalred
// this also gives a compilation behaviour to javascript, so this creates a snapshot of all the vars and functions
// variables default value - undefined
// functions dafault value - function definition

//console.log("This is new value - " + newValue)//ReferenceError: newValue is not defined
//var myValue = undefined; : Hoisting

console.log(myValue) //undefined : default value for identifiers (no error as it is hoisted)

var myValue = "Cody";

//console.log(myValue)

printName("Kim") // Name is Kim

function printName(name) {
    console.log("Name is : "+ name)
}

console.log(printAge)
//printAge(36) //Cody : 36, Kim : error, Hoyan : error : printAge is not a function

// function expression 
var printAge = function(age) {
    console.log("Age is : "+ age)
}

printAge(36)

//two new examples of hosting