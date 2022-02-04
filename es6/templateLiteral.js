//we use back tick ` to create html literals and make our content precise 
// dynamic variable can be included using - ${dynVal}

let shortHand = require("./shorthand");

let dynVal = 5959595959;

// let myNormalString = "Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
//                     "\n Lorem Lipsum Lorem Lipsum "+dynVal+" Lorem Lipsum" +
//                     "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
//                     "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
//                     "<h1>Header<h1>"+
//                     "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum"+
//                     JSON.stringify(shortHand);


// console.log(myNormalString)

let myTemplateString = ` Lorem Lipsum Lorem Lipsum Lorem Lipsum
Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum
Lorem Lipsum Lorem Lipsum Lorem Lipsum
                        Lorem Lipsum Lorem Lipsum Lorem Lipsum
                            ${dynVal}
                            ${JSON.stringify(shortHand)}
                        `;


console.log(myTemplateString)