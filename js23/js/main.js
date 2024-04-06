/* window.alert("ok");
alert("ok");

window.alert(window.location);
alert(location); */

const myArray= ["eat","sleep","code"];
const myObject={
    name:"Omer",
    hobbies:["eat","sleep","code"],
    logName: function(){
        console.log(this.name);
    }
};

myObject.logName();

sessionStorage.setItem("mySessionStore",JSON.stringify(myObject));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);

localStorage.setItem("myLocalStore",JSON.stringify(myObject));
/* localStorage.removeItem("myLocalStore");
localStorage.clear(); */
const key= localStorage.key(0);
console.log(key);
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);
const storeLength= localStorage.length;
console.log(storeLength);