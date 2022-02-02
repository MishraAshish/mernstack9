//spread operator : spreads the array in conservational manner, we also use it for the shallow copy of objet arrays

let arrayOFCities = ["Rome", "New York", "New Delhi", "London"];

// console.log(arrayOFCities[0])
// console.log(arrayOFCities[1])
// console.log(...arrayOFCities)

var User = {
    name : "Kim"
}
var User2 = {
    name : "Jhong"
}

var User3 = {
    names : "Jhong"
}

function add(x = 0, y = 0, z = 0){
    //console.log("this + scope + context + execution context ", this)
    console.log(this.name)
    return x+y+z;
}

//console.log(add(1,2,3))
let array = [500,600,800];

console.log("using spread " + add(...array))

console.log("using apply " + add.apply(User, array))
console.log("using apply " + add.apply(User2, array))
console.log("using apply " + add.apply(User3, array))

let Accounts ={
    accountHolderName : "Tohney",
    balance : "$6000",
    address : {
        address1 : "address1",
        address2 : "address2"
    }
}

//let PurhaseOrder = {Accounts,  Delivery : "address3"};
let PurhaseOrder = {...Accounts,  Delivery : "address3"};
//console.log(PurhaseOrder)

Accounts.accountHolderName = "Hoaian";
console.log(Accounts)

console.log(PurhaseOrder)