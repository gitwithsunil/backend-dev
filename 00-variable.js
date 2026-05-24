
// var x = "sunil(656)"
// console.log(x)
// console.log(typeof(x))

// let age = 23
// console.log(age)
// console.log(typeof(age))

// let mySalary
// console.log(mySalary)//undeifned
// console.log(typeof(mySalary))//undefined 

// let y = Symbol("hello")
// console.log(y)
// console.log(y.description)
// console.log(typeof(y))

// let arr = [1 ,2 ,3 ,4 ,5 ,6]
// console.log(arr)
// console.log(arr[3])//4
// console.log(arr[5])//6
// console.log(typeof(arr))//object


//----object-->>>

// let student = {
//     "name" : "sunil",
//     "age" : "22",
//     "roll" : "117",
//     "carrier" : "good"

// }
// console.log(student)
// console.log(typeof(student))
// console.log(student['age'])
// console.log(student['carrier'])

//-----function--->>>


// function mySced(){
//     console.log("i wake up at 3 a.m.")
//     console.log("i eat Biryani")

// }

// mySced()
// mySced()
// mySced()

//---operator---->>

// let a = 32
// let b = 34
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// console.log(a**b)//'a' to the power 'b'



//unary operator
// let a = 7
// let b = 8

// console.log(a)
// a++;
// console.log(a)//8
// a--;
// console.log(a)//7
// a--;
// console.log(a)//6

//assignment operator

// let a = 7
// console.log(a)
// a += 5; //a = a+5
// console.log(a)//12
// a -= 5; //a = a-5
// a*=2;
// console.log(a)
// a/=2;
// console.log(a)
// a%=2;
// console.log(a)
// a**=2;
// console.log(a)

//comparison 
// console.log(2==2)
// console.log(3!=3)
// console.log(2 === '2')//strictly equal to (false AS '2' is string)
// console.log(2!=='2')
// console.log(2>2)
// console.log(3>=3)
// console.log(3<=3)

//logical--->
// let x = 5
// console.log((x<6) && (x>4))
// console.log((x<4) || (x>4))
// console.log(!(x==2))
// console.log(!(x<2))


//--conditional statement---------------------------------------------------->>>

// let age = 15
// if(age>=18){
//     console.log("the student is adult")
// } else {
//     console.log("not a adult")
// }

// let mode = "red"
// let color;
// if ( mode == "dark"){
//     color = "black"

// } else if (mode == "blue"){
//     color = "blue"
// } else if (mode == "red"){
//     color = "red"
// } else {
//     color = "cannot find the color"
// }

// console.log(color)

// //write a program to find grades of the srudents according to the marks obtained
//90-100-->> A
//80-89-->> B
//70-79-->> C
//60-69-->> D
//0-59-->> F    

// let marks = 85
// let grade;
// if(marks>=90 && marks<=100){
//     grade = "A"
// }else if(marks>=80 && marks<=89){
//     grade = "B"
// }else if (marks>=70 && marks<=79){
//     grade = "C"
// } else if (marks>=60 && marks<=69){
//     grade = "D"
// } else if (marks>=0 && marks<=59){
//     grade = "F"
// }   else {
//     grade = "invalid marks"
// }       
// console.log(grade)

// --using loops---------------------------------------->>>

//for loop
//while loop
//do while loop 
// for-of loop
// for-in loop

// let string = "web-devlopement"
// for (let i = 0; i<10 ; i++){
//     console.log("webdev")
// }
// // calculate the sum of 1 to 10

// let sum = 0;
// for (let i = 1;i<=10;i++){
//     sum += i;
// }
// console.log(sum)

// // print javascript 5 times using while loop

// let string = "javascript"
// let i=0;
// while (i<5){
//     console.log(string)
//     i++;        
// } 


// // print WBC 5 times using do while loop

// let string = "WBC"
// let i = 0;
// do {
//     console.log(string)
//     i++;

// } while (i<5)       

// print the string java script using for of loop

// let string = "java script"
// for(let i of string){
//     console.log(i)
// }

// let arr = [1,2,3,4,5]
// for (let i of arr){
//     console.log(i)
    
// }
// console.log(arr.length)

// // print the index of the array using for in loop

// let arr = [1,2,3,4,5,6,7]
// let s = 0;
// for (let i in arr){
//     s += arr[i]
// }

// console.log(s)  

// // print object using for in loop also print the keys and values of the object

// let student = {
//     "name" : "sunil",
//     "age" : "22",
//     "roll" : "117",
//     "carrier" : "good"  
// }
// for (let key in student){
//     console.log("key =",key, "value =",student[key])
// }

// -----String ----------------------------------------------->>>

// let string = "web-devlopement"
// console.log(string[3])
// console.log(string[4][2])//undefined as string[4] is 'd' and 'd'[2] is undefined

// // write a program to print the particular like add 0 to 4 pr address 3 to 7 of a string  length of the string

// let string = "web-devlopement"
// console.log(string.length)
// console.log(string.slice(0,5))//web-d
// console.log(string.slice(3,8))//-devl
// console.log(string.slice(0,15))//web-devlopement    
  
// let string = "web-devlopement"
// console.log(string.toUpperCase())//WEB-DEVLOPEMENT
// console.log(string.toLowerCase())//web-devlopement
// console.log(string.trim())//web-devlopement


// i want to create a web page where i want to show the name of the student in uppercase and the name of the college in lowercase and also remove the extra spaces from the string

// let studentName = "sunil"   
// let collegeName = "  ABC college  "
// console.log(studentName.toUpperCase())//SUNIL
// console.log(collegeName.toLowerCase())//  abc college  
// console.log(collegeName.trim())//abc college

// examlpes 

// let object = {
//     name : "sunil",
//     age : 22,
//     college : "NIST UNIVERSITY",
//     roll : 117

// }
// let output = `my name is ${object.name} and i am ${object.age} years old. i am studying in ${object.college} and my rolll number is ${object.roll}`
// console.log(output)
// let string ="hello world\nwelcome to javascript\tprogramming"

// console.log(string)
// console.log(string.length)  // \n is used for new line and \t is used for tab space so no chamnge in the length of the string as they are escape characters and not visible in the output but they are counted in the length of the string.
// demo = string.toUpperCase()
// console.log(string)
// console.log(demo)
// trim() method is used to remove the extra spaces from the string
// let str = "   hello world   "
// console.log(str)
// console.log(str.trim())//hello world,  all the extra spaces are removed from the string but the spaces between the words are not removed as they are not extra spaces.

// let str1 = "helllo"
// let str2 = "world"
// let str3 = str1.concat(str2)
// console.log(str3)

// replace() method is used to replace a part of the string with another string

// let str1 = "hello world"
// let str2 = str1.replace("world","javascript")
// console.log(str2)
// console.log(str2.replace("javascript","python"))
// console.log(str1.replaceAll("l","L"))//heLLo worLd, replaceAll() method is used to replace all the occurrences of a character in the string with another character.
// console.log(str1.replaceAll("o","O"))//hellO wOrld, replaceAll() method is used to replace all the occurrences of a character in the string with another character.

// charAt() method is used to get the character at a specific index of the string

// let str = "hello world"
// console.log(str.charAt(3))//l, charAt() method is used to get the character at a specific index of the string. index starts from 0, so charAt(3) will return the character at index 3 which is 'l' in this case.    
// console.log(str.charAt(9))//l
// console.log(str.charAt(0))//h

// includes() method is used to check whether a string contains a specific substring or not. it returns true if the substring is found in the string, otherwise it returns false.

// let str = "hello world"
// console.log(str.includes("world"))//true
// console.log(str.includes("javascript"))//false   


//write a function to check whether a string is palindrome or not. a palindrome is a string that reads the same backward as forward. for example, "madam" is a palindrome, but "hello" is not.

// function isPalindrome(str){  
//     let reversedStr = str.split("").reverse().join("")
//     return str === reversedStr
// }
// let inputString = "madam"
// console.log(isPalindrome(inputString))//true
// inputString = "hello"
// console.log(isPalindrome(inputString))//false    























