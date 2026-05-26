// function sum(a,b){ // normal function
//     console.log(a+b);
// }
// function calc(a,b,sumCallback){ // main/ callback function
//     sumCallback(a,b)
// }
// calc(1,2,sum) // function passed as an argument to another function

// ------
// function getData(dataID , generation){
//     setTimeout(() => {
//         console.log("data", dataID)
//         if (getNextData){
//             getNextData():
//         }
//     }, 2000)
// }
// getData(1)

//callback hell ->>

// console.log("getting data-1.....")
// getData(1, () => { 
//     console.log("getting data-2.....")
//     getData(2, () => {
//         console.log("getting data-3.....")
//         getData(3, () => {
//             console.log("getting data-4.....")
//             getData(4, () => {
//                 console.log("getting data-5.....")  
//                 getData(5)

//         })
//     })
// })

// })

getData(1)
    .then(() => {
        return getData(2
            .then(() => {
                return getData(3)
                    .then(() => {  
                        return getData(4)
                            .then(() => {
                                return getData(5)
                            })
                    })
            })
        }
        )

// .then() & .catch() are used to handle the resolved and rejected states of a promise respectively. They allow you to chain multiple asynchronous operations together and handle errors gracefully.    

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("i am a promise")
        //resolve("sucess")
        reject("error")
    })
}

let promise = getPromise()
promise.then((res) => {
    console.log("promisefulfilled", res)
})
promise.catch((err) => {
    console.log("promise rejected", err)
})
