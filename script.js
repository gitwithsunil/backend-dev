// Selecting first button
let btn = document.querySelector("#btn");

// Single click event
btn.onclick = () => {
    console.log("btn was clicked 1 time");
};


// Selecting second button
let btn1 = document.querySelector("#btn1");

// Double click event
btn1.ondblclick = () => {
    console.log("btn was clicked 2 times");
};