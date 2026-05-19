// let arr = [1,2,3,4,5,6,7]
// let s = 0;
// for (let i in arr){
//     s = s + arr[i]// s += arr[i]
// }  
// console.log(s)

// // for a given array marks of the student -> [80,90,70,60,85] , find the average marks of the student-----Question

// let marks = [80,90,70,60,85]
// let sum = 0;
// for ( let i in marks){
//     sum += marks[i]
// }
// let ave = sum/marks.length
// console.log("Average marks:", ave)


// // for a given array with price of 5 products -> [100,200,150,300,250] , all items have 10% off , change the price of the products after discount and print the new price of the products

// let price = [100,200,150,300,250]
// for (let i in price){
//     price[i] = price[i] - (price[i] * 0.1) // price[i] = price[i] - (price[i] * 10/100)
// }
// console.log("price after discount: ", price)

// Array methods in js:-

// 1. push() -> adds an element at the end of the array
// 2. pop() -> removes the last element from the array
// 3. shift() -> removes the first element from the array  
// 4. unshift() -> adds an element at the beginning of the array
// 5. indexOf() -> returns the index of the first occurrence of a specified value in the array, or -1 if it is not found.
// 6. includes() -> determines whether an array includes a certain value among its entries, returning true or false as appropriate.    
// 3.toString() -> converts an array to a string, and returns the result. The elements will be separated by commas.
// 4.join() -> joins all elements of an array into a string and returns this string. You can specify a separator as an argument to join(), which will be used to separate the elements in the resulting string. If no separator is provided, the default separator is a comma (,).
// 5.concat() -> is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// 6.slice() -> returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.
// 7.splice() -> changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array and returns an array containing the removed elements (if any).
// 8.sort() -> sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// 9.reverse() -> reverses the order of the elements in an array in place. The first array element becomes the last, and the last array element becomes the first. This method modifies the original array and returns a reference to the same array.
// 10.map() -> creates a new array populated with the results of calling a provided function on every element in the calling array. It does not modify the original array.
// 11.filter() -> creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.
// 12.reduce() -> executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It does not modify the original array.

//examples

// let marks = [80,90,70,60,85]
// console.log(marks)
// console.log(marks.length)
// marks.push(95) // adds 95 at the end of the array
// console.log(marks[2])// prints the element at index 2 -> 70
// marks[2] = 75 // changes the element at index 2 to 75
// console.log(marks)

// console.log(marks.pop())

// let marks = [80,90,70,60,85]
// console.log(marks)
// let demo = marks.toString()
// console.log(demo)

// let marvelHeroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"]
// let dcHeroes = ["Superman", "Batman", "Wonder Woman", "Flash", "Aquaman"]

// let allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes)

//slice() example

// let animals = ["dog","cat","elephant","tiger","lion"]
// let newAnimals = animals.slice(1,4) // it will return a new array with elements from index 1 to index 3 (4 is not included)
// console.log(newAnimals) // ["cat","elephant","tiger"]
// console.log(animals) // original array is not modified
// console.log(animals.slice(2)) // it will return a new array with elements from index 2 to the end of the array -> ["elephant","tiger","lion"]
// console.log(animals.slice(-2)) // it will return a new array with the last 2 elements of the array -> ["tiger","lion"]
// console.log(animals.slice(2,-1))// it will return a new array with elements from index 2 to index -1 (last element is not included) -> ["elephant","tiger"]

// //splice() example

// let months = ["Jan","Feb","Apr","May","Jun"]
// months.splice(2,0,"Mar") // it will add "Mar" at index 2 without removing any element
// console.log(months) // ["Jan","Feb","Mar","Apr","May","Jun"]
// console.log(months.splice(5,1,"jul")) // it will replace "Jun" with "Jul" at index 5 and return the removed element -> ["Jun"]
// console.log(months) // ["Jan","Feb","Mar","Apr","May","Jul"]
// console.log(months.splice(3,1))// it will remove "Apr" from index 3 and return the removed element -> ["Apr"]
// console.log(months) // ["Jan","Feb","Mar","May","Jul"] it will remove "Apr" from index 3 and return the removed element -> ["Apr"]

//------------FUNCTION in JS------------------------------------------------------------->>>>

// it is a block of code that performs a specific task and can be reused multiple times in a program. Functions are defined using the function keyword, followed by the function name, parentheses, and curly braces. The code to be executed is placed inside the curly braces.

// function greet(){
//     console.log("Hello, welcome to JavaScript!")
// }
// greet() // calling the function to execute the code inside it    

//---------------------example --->>>

// function add(a,b){
//     return a+b
// }
// console.log("Addition:",add(5,1))

// arrow function in js -> it is a shorter syntax for writing functions in JavaScript. It is defined using the arrow (=>) syntax and does not have its own this, arguments, super, or new.target keywords. Arrow functions are always anonymous and cannot be used as constructors.

// let add = (a,b) => {
//     return a+b
// }
// console.log("Addition:",add(5,1))        

// let sum = (a,b) =>{
//     return a+b
// }
// console.log("Sum:",sum(5,10))

// 1.event/event handler -> it is an action or occurrence that happens in the system you are programming, which the system tells you about so your code can respond to it. An event handler is a function that is called when an event occurs. It is used to handle events such as user interactions (clicks, key presses, etc.) or system events (loading, resizing, etc.). Event handlers are typically registered using methods like addEventListener() in JavaScript.
//2async & wait -> async is a keyword used to declare an asynchronous function, which is a function that can perform asynchronous operations and return a promise. The await keyword is used inside an async function to pause the execution of the function until a promise is resolved. This allows you to write asynchronous code in a more synchronous and readable manner. When the await keyword is used, the function will wait for the promise to resolve before continuing with the next line of code.



// let promise = new Promise((resolve, reject) => {
//     let a = 10;
//     let b = 20;  
//     if (a+b === 30){
//         resolve("Success: The sum is correct!")
//     } else {
//         reject("Error: The sum is incorrect!")
//     }
// })   


