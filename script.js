// JavaScript Data Types
 // Numbers:
let lengt = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Barik";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"Abdul", lastName:"Barik"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");
 


// JavaScript String Methods
// String length
let text = "Bangladesh";
let length = text.length;

// String slice()
let part = text.slice(2, 5);
console.log(part)

// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
let text1 = "      Hello World!      ";
let text2 = text1.trim();
console.log(text2)
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()
let text5 = "a,b,c,d,e,f";
const myArray = text5.split(",");
console.log(myArray[4]);



// JavaScript Array Methods
// Array length
// Array toString()
// Array pop()
// Array push()
// Array shift()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)
fruits.shift();
console.log(fruits)
// Array unshift()
// Array join()
// Array delete()
// Array concat()
// Array flat()
// Array splice()
// Array slice()