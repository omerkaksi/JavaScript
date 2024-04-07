//Fetch API
//Callback, Promises, Thenables and Async/Await


//Promises
//3 states: Pending, Fulfilled, Rejected


/* const users = fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    console.log(response);
    return response.json();
})
.then(data => {
    data.forEach(user => {
        console.log(user);
    })
});
console.log(users); */

//Async /Await
const myUsers ={
    userList: []
}
const myCoolFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    /* console.log(jsonUserData); */
    return jsonUserData;
}
/* myCoolFunction(); */
const anotherFunc = async () => {
    const data = await myCoolFunction();
    myUsers.userList = data;
    console.log(myUsers.userList);
}
anotherFunc();
console.log(myUsers.userList);