# INFORMATION

## 00-variable.js file contains all the basics 
## 07-array.js file contains as named 
## 08-functions.js 
## index.html
## script.js
## style.css
## ...
STAUS CODE ->

- 200 -> ok
- 201 -> created
- 202 -> accepted
- 300 -> multiple choice 
- 302 -> found
- 400 -> bad request
- 402 -> payment required
- 404 -> not found
- 406 -> not accepted 
- 408 -> request timeout
- 500 -> internal server error 
- 502 -> bad gateway
- 504 -> gateway timeout


sync in JS:

- Syncronous : In JavaScript, synchronous code is executed sequentially, meaning that each line of code is executed one after the other. When a synchronous function is called, the program will wait for that function to complete before moving on to the next line of code. This can lead to blocking behavior if a function takes a long time to execute, as it will prevent the program from responding to user input or performing other tasks until the function has finished executing.

- Asynchronous : In contrast, asynchronous code allows for non-blocking behavior. When an asynchronous function is called, the program can continue executing other lines of code while waiting for the asynchronous function to complete. This is typically achieved using callbacks, promises, or async/await syntax. Asynchronous code is particularly useful for tasks that involve I/O operations, such as fetching data from a server or reading files, as it allows the program to remain responsive while waiting for these operations to complete. 


- eg: (SYNCRONOUS)

```
function syncFunction(){
     console.log("This is a synchronous function");   
     for (let i=0; i<1000000000; i++){
         // some time-consuming task
     }    
     console.log("Synchronous function has completed");
}
 console.log("Before calling synchronous function");
 syncFunction();
 console.log("After calling synchronous function");   
 ```


- eg:(ASYNC)
```
console.log("one")
console.log("two")
setTime(() => {
    console.log("three")
},4000)                  // 4000 ms = 4s
console.log("four")
console.log("five")
```
o/p -> one,two,four,five,three


callback function in JavaScript
- A callback function is a function that is passed as an argument to another function and is executed after a certain event or condition is met.
- For example, when making an asynchronous request to a server, a callback function can be used to handle the response once it is received. 
- Callback functions are commonly used in JavaScript for handling events, performing asynchronous operations, and implementing higher-order functions. 
- They allow developers to write more flexible and reusable code by enabling functions to be passed around as first-class citizens in JavaScript.  
callback hell
- Callback hell refers to a situation where there are multiple nested callbacks in JavaScript, making the code difficult to read and maintain. This often occurs when dealing with asynchronous operations, such as making API calls or handling events. 
- The code can become deeply nested and hard to follow, leading to confusion and potential errors. To avoid callback hell, developers can use techniques such as Promises or async/await to handle asynchronous operations in a more structured and readable way.  




promise in js
- A promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
- A promise can be in one of three states: pending, fulfilled, or rejected. When a promise is created, it is in the pending state. If the asynchronous operation completes successfully, the promise is fulfilled with a value. If the operation fails, the promise is rejected with a reason (error).
- Promises provide a way to handle asynchronous operations in a more manageable and readable way compared to traditional callback functions. They allow developers to chain multiple asynchronous operations together and handle errors more effectively. 
- Promises are commonly used in JavaScript for tasks such as fetching data from APIs, handling user input, and performing animations.      


-- 3 states of promise in js
- 1.pending: The initial state of a promise, where the operation is still in progress and the outcome is not yet determined.
- 2.fulfilled: The state of a promise when the operation has completed successfully, and the promise has a resolved value.
- 3.rejected: The state of a promise when the operation has failed, and the promise has a reason for the failure (usually an error message).
eg:
```
let promise = new Promise((resolve, reject) => {
     let success = true; // Simulating a successful operation
     if (success) {
         resolve("Operation was successful!"); // Resolving the promise with a success message    
     } else {
         reject("Operation failed!"); // Rejecting the promise with an error message
     }
 });
 promise.then((message) => {
     console.log(message); // This will run if the promise is resolved successfully
 }).catch((error) => {
     console.error(error); // This will run if the promise is rejected
 });
```
-- some examples added to all 3 files : var , arr and function file 


