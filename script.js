// JavaScript Iterables

function myNumbers() {
  let n = 0;
  return {
    next: function() {
      n += 10;
      return {value:n, done:false};
    }
  };
}

// Create Iterable
const n = myNumbers();
n.next(); // 10
n.next(); // 20
n.next(); // 30

console.log(n.next().value);


// JavaScript Sets

const letters = new Set(["a","b","c"]);

// Add Values
letters.add("d");
letters.add("e");


// List all entries

letters.forEach(function(value){
  console.log(value);
})

console.log(letters);
console.log(letters.values());

let myIterator = letters.values();

for (const iterator of myIterator) {
   console.log(iterator);
}


console.log(letters.keys());
console.log(letters.entries());
// console.log(letters.clear());
console.log(letters.delete("c"));
console.log(letters);



// JavaScript Maps

// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);


console.log(fruits);

fruits.forEach(function(value, key) {
  console.log(value, key);
})

for (const x of fruits.values()) {
  console.log("Values:", x);
}

for (const x of fruits.entries()) {
  console.log("entries:", x);
}
for (const x of fruits.keys()) {
  console.log("keys:", x);
}
fruits.set("manggo", 500)
console.log(fruits);

console.log(fruits.has("apples"));
console.log(fruits);

console.log(fruits.get("bananas"));
console.log(fruits.size);
console.log(fruits.delete("apples"));
console.log(fruits);

console.log(fruits.clear());
console.log(fruits);

