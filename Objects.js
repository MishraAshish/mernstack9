//Objects : the basic building block of js can be recognised as memory space to hold values in key/value
// we can create object - {} or using the Object class

var user = {
    name : "Hoyan",
    age : 21,
    address : "Somwehre in Colorado",
    getUserDetails : function (params) {
        return { age : this.age, name : this.name}
    },
    getAddress : function (params) {
        return this.address;
    }
}

//console.log(user.getUserDetails());
//console.log(user.getAddress()); 

//inheritance 
//1. by using the new keyword
// we should avoid this for as instead of making to separate objects it copies the same memory location to child

//var student = new Object(user);
//student.name = "Kim";
//student.session = "MERNStack"
//console.log(student.getUserDetails())
//console.log(student)
//console.log(user)

//2. by using the Object.create method
// this creates two different entities and child points to parent when property not available but parent is not updated

var student = Object.create(user);
student.name = "Tohny";
student.session = "MERNStack"
console.log(student); 
//console.log(user); 

console.log(student.getUserDetails()); 

console.log("student.__proto__ ", student.__proto__);

// overriding 
student.getUserDetails = function () {
    return "From Child " + this.name;
}

console.log(student.getUserDetails()); 