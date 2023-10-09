// JavaScript JSON

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

let obj = JSON.parse(text);

console.log(obj);


let text1 = {
  name: "abdul Barik",
  age : 26,
  city :"dhaka"
}

console.log(text1);

let text_json = JSON.stringify(text1);
console.log(text_json);
let text_obj = JSON.parse(text_json);
console.log(text_obj);