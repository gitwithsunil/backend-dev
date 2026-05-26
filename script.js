function sum(a,b){ // normal function
    console.log(a+b);
}
function calc(a,b,sumCallback){ // main/ callback function
    sumCallback(a,b)
}
calc(1,2,sum) // function passed as an argument to another function

