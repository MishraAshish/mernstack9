// callback functions - is a way of passing function as a parameter


// we'll use this as a callback function
function Print(name) {
    console.log(name)
}

function PrintNameWithSal(name) {
    console.log("Mr/Mrs " +name)
}

function GetName(callBackFunc, param) {
    callBackFunc(param);
}

GetName(Print, "Hoyan")
GetName(PrintNameWithSal, "Cody Hall")



function GetAddress(callBack, param, param2, param3) {
    callBack("Address " + JSON.stringify({ param, param2, param3}));
}

GetAddress(Print, "Somewhere on earth", "Besides a sea", "under the sky");

////////


// nested functions do hold the scope of outerfunctions variables or properties
var e = 15; //global scope 

function sum(a){
  return function sum2(b){
    return function sum3(c){
      // outer functions scope
      return function sum4(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}
var sum2 = sum(1);
var sum3 = sum2(2);
var sum4 = sum3(3);
var result = sum4(4);
console.log(result)

var myFunc = sum(1)(2)(3)(4) //chain of execution
console.log(myFunc)

//globalThis.name = "The Global Value"