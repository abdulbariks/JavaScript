// JavaScript Regular Expressions



let re;
let str; 

re = "Visitssa W3Schools!";
str = "W3Schools"

re = "Visi W3Schools!";
str = /w3schools/i;

re ="re, green, red, green, gren, gr, blue, yellow";

console.log(re.search(str));
console.log(re.replace(/w3schools/i, "Barik School"));
console.log(re.match(/\d/g));
console.log(re.match(/(red | green)/g));

// Costal Code
re = /^[0-9]{4}$/
str = "5500";


// Phone number
//017386014909  +8801738601909 8801738601909
re = /^(\+)?(88)?01[0-9]{9}$/;
str = "01738601909"


// Email
re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
str ="barik.34@gmail.com.bd"



console.log(re.exec(str));
console.log(re.test(str));

reTest(re, str);
function reTest(re, str){
  if (re.test(str)) {
    console.log(`'${str}' Matches '${re.source}'`);
  } else {
    console.log(`'${str}'  Doesn't Matches '${re.source}'`);
  }
}