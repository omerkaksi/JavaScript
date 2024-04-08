//Fetch API
//Callback, Promises, Thenables and Async/Await

//workflow function
//Example-1
const getDadJoke =async () => {
    const response = await fetch("https://icanhazdadjoke.com",{
        method: "GET",
    headers: {
        Accept: "application/json"
    }
    });
    const jsonJokeData = await response.json();
    console.log(jsonJokeData);
    console.log(jsonJokeData.joke);
    }
    getDadJoke();
    
    const getDadJoke2 =async () => {
        const response = await fetch("https://icanhazdadjoke.com",{
            method: "GET",
        headers: {
            Accept: "text/plain"
        }
        });
        const textJokeData = await response.text();
        console.log(textJokeData);
        }
        getDadJoke2();
    
        
    
    const jokeObject = {
        "id": "GeFQZ89h",
        "joke": "The rotation of earth really makes my day."
    }
    
        const postData =async (jokeObj) => {
        const response = await fetch("https://httpbin.org/post",{
            method: "POST",
        headers: { "Content-Type":"application/json"
                },
        body: JSON.stringify(jokeObj)
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse.headers);
        }
        postData(jokeObject);
    //Example 4 retrieving data from url address
        const requestJoke =async (firstName,lastName) => {
            const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`);
           
            const jsonResponse = await response.json();
            console.log(jsonResponse.value.joke);
            }
            requestJoke("Bruce","Lee");