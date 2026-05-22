# INFORMATION

## 00-variable.js file contains all the basics 
## 07-array.js file contains as named 
## 08-functions.js 


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


- eg:

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
