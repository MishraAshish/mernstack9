//arrow function : we call it as fat arrow function and will have below properties
//1. easy to write - ()=>{}
//2. resolves the issue with context like bind

//1.

function TestMe(params) {
    console.log(params)
}
TestMe("This my normal function")

let arrFunc = (params)=>console.log(params)
arrFunc("This is my arrow function")

let sum = (a,b)=>a+b
console.log(sum(2,5))

let multiply = (a,b)=>{
                return a*b+99
            }
console.log(multiply(6,9))

//2. resolves the issues like context as bind does, by copying context of parent into the child function
var SoftwareEnggineer = {
    Name : "XYZ Zukerberg",
    Age : 25,
    Skill : "JS, ES6, nodejs",
    
    GetSkills : function() {
        console.log("Skill " + this.Skill) //this -will be the SoftwareEnggineer object
        //a twaek could be
        var that = this;
        
        setTimeout(function() {
            console.log("Skill from that " + that.Skill)
        }, 1000);


        setTimeout(() => {
            console.log("Skill from that " + this.Skill)
        }, 2000);
    }
}

SoftwareEnggineer.GetSkills();