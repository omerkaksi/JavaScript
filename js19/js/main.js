//JSON JavaScript Object Notation
/* JSON is used to send and receive data */

const myObj ={
  name:"Dave",
  hobbies: ["eat","sleep","code"],
  hello: function(){
    console.log("Hello!")
  }
};
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);//string
console.log(sendJSON.name);//undefined

const receiveJSON =JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);//object but method is lost