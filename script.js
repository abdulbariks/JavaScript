// Loop
// for - loops through a block of code a number of times
for (let i = 0; i < 5; i++) {
    console.log(i);
  }

const cars = ["BMW", "Volvo", "Saab", "Ford"];
const name = "bangladesh";
let i = 0;
let namelen =name.length;
let len = cars.length;
for (i; i < len; i++) {
  console.log(cars[i])

}
for (j =0; j<namelen; j++) {
    console.log(name[j]);
    
}

// while - loops through a block of code while a specified condition is true
while (i < 10) {
    console.log(i)
    i++;
  }
  let cities =  ['Dhaka ', 'rangpur', 'raajshahi', 'barisha']
  let y = 0;
  while (y <cities.length) {
    console.log(`index: ${y} and item is : ${cities[y]}`)
    y++;
  }
// do/while - also loops through a block of code while a specified condition is true
let city = "dhaka";
let citylen = city.length;
let x = 0;
do {
    console.log(city[x])
    x++;
  }
  while (x < citylen);
// for/in - loops through the properties of an object
const person = {fname:"Abdul", lname:"Barik", age:26};
for (let x in person) {
  console.log(x + person[x])
}

// for/of - loops through the values of an iterable object
//array
for (let x of cars) {
  console.log(x)
}

//string
let language = "JavaScript";
for (let x of language) {
console.log(x)
}


// JavaScript Break and Continue
for (let i = 0; i < 10; i++) {
    if (i === 3) {
         break; 
        }
    console.log(i)
  }

  for (let i = 0; i < 10; i++) {
    if (i === 5) {
         continue; 
        }
    console.log(i)
  }


  let n = parseFloat(prompt("Enter Your Number:"));
  let sum = 0;
  let series = '';
  for (let i = 1; i <=n; i++) {
    sum =sum+i**2;
    series = series + (i**2).toString()
    if (i==n) {
        continue
    }
    // series = series + '+';
    series += '+';

  }
  console.log(`${series} = ${sum}`);
