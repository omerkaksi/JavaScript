//Fetch API
//Callback, Promises, Thenables and Async/Await

//Callbacks
/* function firstFunction (parameters,callback) {
    // do staff
    callback();
}

//"callback hell"

firstFunction(para, function(){
    secondFunction(para,function(){
        thirdFunction(para,function(){

        });
    });
}); */

//Promises
//3 states: Pending, Fulfilled, Rejected

const myPromise = new Promise((resolve,reject)=> {
    const error = false;//true
    if(!error){
        resolve("Yes. resolved the promise")
    } else {
        reject("No. rejected the promise");
        }
});
/* console.log(myPromise); */
/* myPromise
.then(value=> {
    return value + 1 ;
})
.then(newValue => {
    console.log(newValue);
})
.catch(err => {
    console.error(err);
}) */

const myNextPromise = new Promise((resolve,reject) => {
    setTimeout(function(){
        resolve("myNextPromise resolved!");
    },3000); //3s delay
});

myNextPromise.then(value => {
    console.log(value);
});

myPromise.then(value => {
    console.log(value);
});