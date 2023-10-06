// JavaScript Errors Handling
// JavaScript try and catch
// try {
//   Block of code to try
// }
// catch(err) {
//   Block of code to handle errors
// }
try {
  adddlert('Hello')
} catch (error) {
  console.log(error.message);
}

// JavaScript Throws Errors & The finally Statement
// try {
//   Block of code to try
// }
// catch(err) {
//   Block of code to handle errors
// }
// finally {
//   Block of code to be executed regardless of the try / catch result
// }

let x = "5"
try {
  if(x.trim() == "") throw "is empty";
  if(isNaN(x)) throw "is not a number";
  x = Number(x);
  if(x > 10) throw "is too high";
  if(x < 5) throw "is too low";
}
catch(err) {
  console.log(err);
}
finally {
  console.log(x);
}

// Range Error
var num = 1;
try {
  num.toPrecision(500); //Range Error

}
catch(err) {
  console.log(err.name);
}
// Type Error
var num = 1;
try {
  num.toUpperCase();//Type Error

}
catch(err) {
  console.log(err.name);
}

// Syntax Error
try {
  eval("alert('Hello)");   // Syntax Error
}
catch(err) {
  console.log(err.name);
}
