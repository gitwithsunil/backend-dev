//function

// function myFunction(a,b){
//     console.log(a+b)

// }
// myFunction(5,10) // calling the function with arguments 5 and 10, it will print 15
// myFunction(100,400)

//1.create a function using "function" keyword that takes a string as an argument & return the number of vowels in that string.(TCS interview question )

// function countVowels(str){
//     let count = 0
//     let vowels = "aeiouAEIOU"
//     for (let i=0; i<str.length; i++){
//         if (vowels.includes(str[i])){
//             count++
//         }

//     }
//     return count
// }
// let inputString = "Hello World"
// let vowelCount = countVowels(inputString)
// console.log(`Number of vowels in "${inputString}":`,vowelCount)     


//we are given array of marks of student. filter out the marks of the student 
// that scored more than 90 . let marks = [89,67,93,56,91,45,99]

// marks = [89,67,93,56,91,45,99]
// let topper = marks.filter((val) => {
//     return val >= 90;
// })
// console.log(topper)


//DOM(document object model) in JS------------------------->>

//when a web page is loaded, the browser creates a document object model of the page, which is a tree-like structure that represents the elements on the page. The DOM allows developers to access and manipulate these elements using JavaScript.

//example of DOM manipulation
// let heading = document.getElementById("myHeading") // it will select the element with id "myHeading"
// console.log(heading) // it will print the selected element
// heading.innerText = "Hello, welcome to JavaScript!" // it will change the text of the selected element to "Hello, welcome to JavaScript!"
// heading.style.color = "blue" // it will change the color of the selected element to blue
// heading.style.fontSize = "24px" // it will change the font size of the selected element to 24px
// heading.style.backgroundColor = "yellow" // it will change the background color of the selected element to yellow
// heading.style.padding = "10px" // it will add padding of 10px to the selected element
// heading.style.border = "2px solid black" // it will add a border of 2px solid black to the selected element

//HTML DOM tree
// windows <- document <- html <- head, body <- h1, p, div, etc.
// the window object is the global object in JavaScript that represents the browser window. 
// The document object is a property of the window object that represents the HTML document loaded in the browser. The html element is the root element of the document, and it contains the head and body elements. 
// The head element contains metadata about the document, while the body element contains the content of the document, such as headings, paragraphs, divs, etc.
// we can access and manipulate these elements using JavaScript to create dynamic and interactive web pages.

// why we use DOM manipulation in JavaScript?
// 1.to change the content of the web page dynamically without reloading the page.
// 2.to add interactivity to the web page by responding to user actions such as clicks, mouse movements, etc.
// 3.to create animations and effects on the web page.
// 4.to validate user input in forms before submitting them to the server.
// 5.to fetch data from a server and display it on the web page without reloading the page using AJAX (Asynchronous JavaScript and XML).    


// wondow object in JavaScript represents the browser window and provides methods and properties to interact with it. It is the global object in JavaScript,
//  which means that all global variables and functions are properties of the window object.
// it is also a global object that provides access to the browser's features and allows developers to manipulate the browser window, such as opening new windows, resizing the window, and handling events. 
// The window object also provides methods for displaying alerts, prompts, and confirmations to the user.

// Event listner in js
// An event listener is a function that is called when a specific event occurs on an element. For example, when a user clicks a button, an event listener can be used to execute a function that performs a specific action in response to the click event. 
// Event listeners can be added to elements using the addEventListener() method, which takes two arguments: the type of event to listen for (e.g., "click", "mouseover", "keydown") and the function to execute when the event occurs. 
// Event listeners are essential for creating interactive web pages and applications, as they allow developers to respond to user actions and create dynamic content.















