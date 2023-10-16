// JavaScript Async & Await


function myDisplayer(some) {
  console.log(some);
}


async function myFunction1(){
  return "Abdul Barik";
}


async function myFunction2(){
  return "Age 26";
}


// console.log(myFunction());

// setInterval(() => {
//   myFunction1().then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );
// }, 5000);

myFunction1().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);


myFunction2().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);

console.log();


async function getFile() {
  let myPromise = new Promise(function(resolve) {
    let req = new XMLHttpRequest();
    req.open('GET', "ajax_info.txt");
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });
  let mypromise = await myPromise;
  console.log(mypromise);
}

getFile();



async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    let num = 10 ;
    if (num >= 0) {
      resolve("It's Positive Number")
    } else {
      reject("It's Negative Number");
    }
  });
  let result = await myPromise;

  console.log(result);
}

myDisplay();