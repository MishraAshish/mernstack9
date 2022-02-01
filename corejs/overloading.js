//OOP's fundamentals -
//1.Inheritance - constructor function in es5 and then classes in es6
//2.Encapsulation - data hiding can be done through closures
//3.Polymorphism - Overriding (it supports in function as well in classes) and OverLoading (doesnot support overloading)
//4.Abstraction - 

//overloading : same name method with different signatures

Vaccination("dose1", "dose2", "dose3")

function Vaccination() {
    console.log("Nasal Spray")
}

Vaccination("dose1")

function Vaccination(dose1) {
    console.log("dose 1", dose1)
}

Vaccination("dose1", "dose2", "dose3")

function Vaccination(dose1, dose2) {
    console.log("dose 2", dose1, dose2)
}

Vaccination("dose1", "dose2")

function Vaccination(dose1, dose2, dose3) {
    console.log("dose 3", dose1, dose2, dose3)
}

Vaccination()

//in javascript functions get over-written by the last function and do not have overloading concept