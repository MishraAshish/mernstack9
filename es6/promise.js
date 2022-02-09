//problem - callback hell : due to un modularised or too many callbacks 

// function SigninSignUp(AuthenticationCallback, AuthorizationCallback, NavigationCallback) {
//     let ValidUser =  AuthenticationCallback(userid, password); //making a server call - ajax (in async)
//         if (ValidUser) {
//             let userRole = AuthorizationCallback(ValidUser); //making a server call - ajax (in async)            
//             //userRole.whatisTheOutput //success or failed -- promise
//             if (userRole) { 
//                 let nextPage = NavigationCallback(userRole) //making a server call - ajax (in async)
//             } else {
//                 //check again for the user validity
//                 SigninSignUp(...callbacks);
//             }
//         } else {
//             //send him on forgot password 
//         }
// }
// SigninSignUp(AuthenticationFunc, AuthorizationFunc, NavigationFunc)

//Promises : These are the proxy objects that give us a control to check the status of promise and 
// upon revelant status we also get the type, payload associated with that in response
// promise will have 3 states - pending, fullfilled/resolved (then), rejected (catch)

let lunchPromise = new Promise((resolve, reject)=> {
        //lets make a waiting call to server using settimeout
        setTimeout(() => {
            resolve({
                "Promised By" : "Cody",
                "status" : "Success",
                "Lunch Attendees" : "Tohny, Kim"
            })
        }, 2000);

        setTimeout(() => {
            reject({
                "Promised By" : "Cody",
                "status" : "Failed",
                "Lunch Attendees" : "Tohny, Kim"
            })
        }, 1000);
})

console.log(lunchPromise)

lunchPromise.then((promise, error)=>{ //what has been happend to the promise // promise is resolved
    console.log("then ", promise)
    return JSON.stringify(promise) //can do some data manipulation
}).then((data)=>{
    console.log(data) //recieve manipulated data
}).catch((error)=>{ //if promise fails //gets rejected
    console.log("catch ", error)
}).finally(()=>{
    console.log("Finally")
})

console.log(lunchPromise)


// create a promise object with name student on 2 seconds student is pass and set status stating learnt es6
// then for rejected case set that status - i am progressing


//
// authentication call - userid/authorised
// getuserdetails -
// getuserCart -