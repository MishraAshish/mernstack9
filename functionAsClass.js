//classes using function : we can use constructor function to make our function behave like a standard object oriented
//class object

// class User {
//     constructor();
//     getName();
//     getAddress();
// }
// User userObj = new User()

var User = function (name, age) {
    this.name = name; //this - is the context (scope) of the function
    this.age = age;

    this.getUser = function () {
        return{
            name : this.name,
            age : this.age
        }
    }
}

var userObj = new User("Hoyan", 19);
console.log(userObj.getUser());
userObj.session = "MERNStack";

userObj.getSession = function () {
    return this.session;
}
console.log(userObj.getSession());

//overriding
userObj.getUser = function () {
    return "From Child Override"
}
console.log(userObj.getUser());