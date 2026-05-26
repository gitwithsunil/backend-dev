// function sum(a,b){ // normal function
//     console.log(a+b);
// }
// function calc(a,b,sumCallback){ // main/ callback function
//     sumCallback(a,b)
// }
// calc(1,2,sum) // function passed as an argument to another function

// ------
function getData(dataID , generation){
    setTimeout(() => {
        console.log("data", dataID)
        if (getNextData){
            getNextData():
        }
    }, 2000)
}
getData(1)

//callback hell ->>

console.log("getting data-1.....")
getData(1, () => { 
    console.log("getting data-2.....")
    getData(2, () => {
        console.log("getting data-3.....")
        getData(3, () => {
            console.log("getting data-4.....")
            getData(4, () => {
                console.log("getting data-5.....")  
                getData(5)

        })
    })
})

})