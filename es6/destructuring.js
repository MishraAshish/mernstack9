//a way to assign data without tracing from object to object and without intializing multiple variables
// let userDetails = ["Tohny",19,"somewhere on earth"]
// let myName = userDetails[0]
// let myage = userDetails[1]
// let myadd = userDetails[2]

//Two Type of destructuring present
//1. Array Destructing
//a. basic assignments
// let [name, age, address, session] = ["Cody", 23, "on earth",""];

// console.log(name)
// console.log(age)
// console.log(address)
//console.log(sessionName)

//b.  default values

// let [name = "Hoaian", age, address, session = "MERNStack"] = []
// console.log(name)
// console.log(age)
// console.log(address)
// console.log(session)

//c. rest param values

let [one, two, three, ...rest] = [1,2,3,4,5,6,7,7,9,8]
// console.log(one)
// console.log(two)
// console.log(three)
// console.log(rest)

//d. swapping of variables

let morning = "sun", evening =  "moon";
[morning, evening] = [evening, morning] //swapping of variables
console.log(morning)
console.log(evening)
