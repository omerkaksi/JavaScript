//Strings
const myNumber=42;
//The length property
console.log(myNumber);

const myFloat=42.01;

console.log(myFloat);
console.log(myFloat===myNumber);
const myString='42.012gds';
/* console.log(myString+3); */
console.log(Number(myString)+3);
console.log(Number(true));

//Number methods

console.log(Number.isInteger(myString));
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myString).toFixed(2));
console.log(Number.parseInt(myString));

//Chaining
console.log(Number.parseFloat(myString).toFixed(2).toString());
console.log(Number("omer"));
console.log(isNaN("omer"));