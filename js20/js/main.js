//JavaScript Errors and Error Handling
"use strict";
/* const variable= "Ömer"; //without const error
console.log(variable); */
const makeError = ()  =>{
try{
    throw new customError("This is a custom error");
} catch(err){
console.error(err.name);
console.error(err.message);
console.error(err.stack);
}
}
makeError();


function customError(message){
    this.message=message;
    this.name="customError";
    this.stack= `${this.name}: ${this.message}`;
}

const makeError2 = ()  =>{
    let i=1;
    while(i<=5){
    try{
        if(i%2!==0){ throw new Error("odd number");}
       
    console.log("even number");
    } catch(err){
    console.error(err.name);
    console.error(err.message);
    console.error(err.stack);
    } finally{console.log("...finally");
i++;}
    }}
    makeError2();