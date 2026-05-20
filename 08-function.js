//function

// function myFunction(a,b){
//     console.log(a+b)

// }
// myFunction(5,10) // calling the function with arguments 5 and 10, it will print 15
// myFunction(100,400)

//1.create a function using "function" keyword that takes a string as an argument & return the number of vowels in that string.(TCS interview question )

function countVowels(str){
    let count = 0
    let vowels = "aeiouAEIOU"
    for (let i=0; i<str.length; i++){
        if (vowels.includes(str[i])){
            count++
        }

    }
    return count
}
let inputString = "Hello World"
let vowelCount = countVowels(inputString)
console.log(`Number of vowels in "${inputString}":`,vowelCount)     














