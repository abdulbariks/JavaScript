// JavaScript Callbacks
// Function Sequence
function myDisplayer(some) {
  console.log(some);
}

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

setTimeout(function myFirst() {
  myDisplayer("Hello");
},9000);

setTimeout(function mySecond() {
  myDisplayer("Goodbye");
}, 7000);


myFirst();
mySecond();


// Callback Functions
function myResult(something) {
  console.log(something);
}


function mySum(num1, num2, myCallback) {
  let sum = num1+num2;
  myCallback(sum)
}

mySum(5,4,myResult);



// setInterval(myFunction, 1000);
// function myFunction() {
//   let d = new Date();
//   document.getElementById("demo").innerHTML=
//   d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds();
// }

// JavaScript Functions
setTimeout(function() { 
  myFunction("I love JavaScript !!!"); 
}, 3000);

function myFunction(value) {
  console.log(value);
}

// JavaScript Promise

function mypromiseresult(value){
  console.log(value);
}
const myPromise = new Promise(function(myResolve, myReject) {
  let x = 5;
  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});


// myPromise.then(
//   function(value) {
//   console.log(value);
// },
// function(err) {
//   console.log(err);
// }

myPromise.then(
  function(value) {
  mypromiseresult(value)
},
function(err) {
  mypromiseresult(err)
}
);