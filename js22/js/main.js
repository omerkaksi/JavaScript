/* const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2"); */

//Syntax: addEventListener(event,function, useCapture)

/* const doSomething = () => {
    alert("doing something");
};

h2.addEventListener("click",doSomething,false);
h2.removeEventListener("click",doSomething,false);

h2.addEventListener("click",(event) => {
    console.log(event.target);
    event.target.textContent ="Clicked";
}); */

document.addEventListener("readystatechange",(event) =>{if (event.target.readyState==="complete"){
    console.log("readySState: complete");
    initApp();
}
});

const initApp = () => {
    const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");
view.addEventListener("click", (event) => {
    /* view.classList.add("purple");
    view.classList.remove("darkblue"); */
     view.classList.toggle("purple");
    view.classList.toggle("darkblue");
})
div.addEventListener("click", (event) => {
    event.stopPropagation();
    div.classList.toggle("blue");
    div.classList.toggle("black");
})
h2.addEventListener("click", (event) => {
    const myText =event.target.textContent;
    myText ==="My 2nd View"
        ? (event.target.textContent ="Clicked")
        :(event.target.textContent ="My 2nd View");
});
const nav=document.querySelector("nav");
nav.addEventListener("mouseover", (event) => {
    event.target.classList.add("height100");
});
nav.addEventListener("mouseout", (event) =>{
    event.target.classList.remove("height100");
});
};