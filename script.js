// Spread Operator

let num1 = [1, 2, 3, 4, 5, 6, 9]
let num2 = [5, 6, 7, 8]

console.log(...num1, ...num2);

let [one, two, ...spread] = num1;

console.log(one, two, ...spread);



let person1 = {
    name: "abdul ",
    age: 26,
    city: "Rangpur"
}

let person2 = {
    name: "Barik ",
    age: 26,
    city: "Dhaka"
}

console.log(person1, person2);

let person = {...person1, ...person2}
console.log(person); 
