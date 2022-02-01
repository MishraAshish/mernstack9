//ES5 - released in 2009 and works on ecmascript base standards also called plain javascript, vanila javascript
//ES6 - released in 2015 and support ecmascript 6 standards to give us advance features closer to class based progm lang

//ES5 - var : functional scope hoisted variable
//ES6 - let and const : block scoped variables or lexical variables

//1. var is a functional scope, let and const are block scope (lexical scope) and doesn't support hoisting

// function name(params) {
//     var funcVar = "functional scope"
// }
// console.log(funcVar)
// var funcVar = "variable var type"

//console.log(letConstVar)
//let letConstVar = "variable let/const type" //do not supprt hoisting


{
    var funcVar = "variable var type";
    let letVariable = "let lexical";
    const cnstVariable = "const lexical";
}

console.log(funcVar)
//console.log(letVariable) // cant access outside the block {}

//2. we can declare and assign var multple times, however let can be declared only once and can be assigned multiple times
// whereas const needs to be defined and declared at the same time and can't be reassigned again

var funcVar = "can be assigned and declare multiple times"
var funcVar = "can be assigned and declare multiple times 1"
funcVar = "can be assigned and declare multiple times 2"
console.log(funcVar)

//let lexicalLet;

let lexicalLet = "ES6 new variable"
//let lexicalLet = "ES6 new variable" //Identifier 'lexicalLet' has already been declared

lexicalLet = "reassignment is possible"

//const lexicalConst; //SyntaxError: Missing initializer in const declaration

const lexicalConst = "constant value";
//const lexicalConst = "constant value"; //Identifier 'lexicalLet' has already been declared

//lexicalConst = "new value"

const User = {
    name : "Cody",
    session : "Mernstack"
}

// const User1 = {
//     name : "Cody",
//     session : "Mernstack"
// }

//User = {}

User.name = "Hoian"

console.log(User)

//3. let/const resolve issues due to functional scope hold with var

var index = undefined; //gets hoisted to its functional scope
for (index = 0; index < 5; index++) {
    setTimeout(() => {
        console.log(`index value ${index}`)//in case of var the value associated with it gets evaluated at the time of execution
    }, 1000);    
}

console.log(index)


for (let idex = 0; idex < 5; idex++) {
    setTimeout(() => {
        console.log(`index value ${idex}`)//in case of var the value associated with it gets evaluated at the time of execution
    }, 1000);    
}

//console.log(idex) //let variable cant be accessed outside of {}