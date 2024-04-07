//Fetch API
//Callback, Promises, Thenables and Async/Await

//workflow function
//Example-1
const getAllUserEmails =async () => {
const response = await fetch("https://jsonplaceholder.typicode.com/users");
const jsonUserData = await response.json();
const userEmailArray = jsonUserData.map(user =>{
    return user.email;
} );
//console.log(userEmailArray);
//return userEmailArray;
postToWebPage(userEmailArray);
}

const postToWebPage = (data) => {
    console.log(data);
}

getAllUserEmails();