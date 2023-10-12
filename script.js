// The var, let and const keywords 

var x = 2;     // Allowed
var x = 3;     // Allowed
x = 4;         // Allowed


let y = 2;     // Allowed
// let y = 3;     // Not Allowed
y = 4;         // Allowed


const z = 10;  // Allowed
// const z = 5;    // Not Allowed
//  z = 10;         // Not Allowed




console.log(`Golobal Scope: `, x, y, z );

function test() {
  var x = 10;
  let y = 20;
  const z = 30;

  console.log(`Functiuon Scope:`, x,y,z);
}

test()


console.log(`Golobal Scope: `, x, y, z );


if (true) {
  var x = 40;
  let y = 50;
  const z = 60;

  console.log(`if Scope: `, x, y, z );
}

console.log(`Golobal Scope: `, x, y, z );


for (var x = 0; x < 8; x++) {
  console.log(x);
  
}

console.log(`Golobal Scope: `, x, y, z );

for (let x = 0; x < 10; x++) {
  console.log(x);
  
}

console.log(`Golobal Scope: `, x, y, z );

// for (const x = 0; x < 10; x++) {
//   console.log(x);
  
// }

// console.log(`Golobal Scope: `, x, y, z );