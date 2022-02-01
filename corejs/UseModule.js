var myModule = require("./MyModule");

myModule.Account.GetStudentDetails(5)

myModule.Student.GetStudentDetails(200)

console.log(`Imported Module ${JSON.stringify(myModule)}`);

myModule.GetStudentDetails(10);

//create a function with name Sum in an object name Calculator