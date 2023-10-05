// JavaScript functions 
function functionName(parameters) {
  // code to be executed
}

function firstFunction(a,b) {
  return a+b;
}

let x = firstFunction(3,4);
console.log(x);

// Arrow Functions
let ArrowFunction =(a,b)=>{
  return a*b;
}
console.log(ArrowFunction(3,4))


// Default Parameter Values
function myFunction(x = 5, y = 10) {
  return x + y;
}
console.log(myFunction());


// The Arguments Object
 x = findMax(1, 123, 500, 115, 44, 88);
function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(x);


// Invoking a Function as a Method
const myObject = {
  firstName:"abdul",
  lastName: "Barik",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
let y = myObject.fullName(); 
console.log(y);



// JavaScript call() apply() Method
const person = {
  firstName:"Rahat",
  lastName:"Rafat",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"Abdul",
  lastName: "Barik"
}
const person2 = {
  firstName:"Rasel",
  lastName: "islam",
}
console.log(person.fullName.call(person2));
console.log(person.fullName.apply(person1));
console.log(person.fullName());

// JavaScript Function bind()
const persons = {
  firstNam:"Rahat",
  lastNam: "Rafat",
  fullNam: function () {
    return this.firstNam + " " + this.lastNam;
  }
}
const member = {
  firstNam:"Abdul",
  lastNam: "Barik",
}
console.log(persons.fullNam.bind(member));
