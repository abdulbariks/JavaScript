// Arrow Function

hello = function() {
  return "Abdul Barik";
}

console.log(hello());


hello = ()=>{
  return "Abdul Barik"
}

console.log(hello());



hello = () => "Abdul Barik"
console.log(hello());


hello = (val) => "Hello " + val;
console.log(hello("Barik"));



let person = () =>{
  let name = "Abdul Barik";
  let age = 26;

  // Template Literals use back-ticks (``) 
  console.log(`Name is ${name} & Age ${age}`);
}

person()
