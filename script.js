// JavaScript HTML DOM
// JavaScript HTML DOM Animation

document.getElementById('animation').addEventListener("click", myMove);
function myMove() {
  let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.center = pos + "px"; 
      elem.style.right = pos + "px"; 
    }
  }
}

// nodeName Property
let val = document.getElementById("animation").nodeName;
let val1 = document.getElementById("animation").nodeType;
console.log(val1);


// Creating New HTML Elements (Nodes)
const para1 = document.createElement("p");
const para2 = document.createElement("p");
const node1 = document.createTextNode("This is new.");
const node2 = document.createTextNode("Second Paragraph text");

para1.appendChild(node1);
para2.appendChild(node2);


const element = document.getElementById("div1");
element.appendChild(para1);
element.appendChild(para2);

// Replacing HTML Elements 
const para3 = document.getElementById("p1")
const node3 = document.createTextNode("This is new replace.");
para3.replaceWith(para3, node3);


// HTML DOM Node List
const myNodelist = document.querySelectorAll("p");
console.log(myNodelist);