//JavaScript Errors and Error Handling
"use strict";
/* const variable= "Ömer"; //without const error
console.log(variable); */
const makeError = ()  =>{
try{
const name="Dave";
name="Joe";
} catch(err){
console.log(err);
console.error(err);
console.error(err.name);
console.error(err.message);
console.error(err.stack);
console.warn(err);
console.table(err);
/* logTheError(err.stack); */
}
}
makeError();
