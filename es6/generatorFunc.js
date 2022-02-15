
// function SomeFunction(params) {
//     return params;
// }

// //SomeFunction()//invoking
// SomeFunction()//invoking

// console.log(SomeFunction("We are heading towards es6 completion"))

// A generator function is a function that can be yeilded as many times as possible upon single invocation

//Generator Functions: Allows us to get multiple yields (or kind of returns) for the indefinite number of times
// without creating and invocation of the function

function *PrintData(num) {

    //do any asyn operation to read the value
    let updatedValue = 300;

    yield num+updatedValue;
    yield num-updatedValue;
    yield num*updatedValue;
    yield num/updatedValue;

    return "something"

    yield "Last Yeild";
}

let genFunc = PrintData(50);

console.log(genFunc)
console.log(genFunc.next())
console.log(genFunc.next())
console.log(genFunc.next())
console.log(genFunc.next())
console.log(genFunc.next())
console.log(genFunc.next())


//arithmaticCalculator using - generator function - (a,b), 
//add, subtract, multiply, divide - all this we need to yield

//Arithmatic Calculator