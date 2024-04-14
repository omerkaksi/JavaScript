//Strings
const myVariable="Mathematics";
//The length property
console.log(myVariable.length);
console.log("every good boy".length);

console.log(myVariable.charAt(6));
console.log(myVariable.charAt(0));
console.log(myVariable.indexOf("Mat"));
console.log(myVariable.lastIndexOf("t"));
console.log(myVariable.slice(5,7));//7 hariç
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());
console.log(myVariable.includes("mat"));

console.log(myVariable.split("e")); //e yok, ayırıyor
console.log("John,Joe,Ömer".split(","));
console.log("John Joe Ömer".split(" "));