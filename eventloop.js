

console.log("Hi! Event Loop!")

setTimeout(function() {
    console.log("I am first call back")

    setTimeout(function() {
        console.log("I am first call back's callback")
    }, 0); //0

}, 1000); 

setTimeout(function() {
    console.log("I am second call back")
}, 1000); //1000

setTimeout(function() {
    console.log("I am third call back")
}, 1000); //1000

console.log(`We did it!`)