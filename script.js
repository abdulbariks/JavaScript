// JavaScript HTML DOM

document.getElementById("demo").innerHTML = "The getElementById Method";

tagelement = document.getElementsByTagName("p");
classelement = document.getElementsByClassName('pra');

document.getElementById('pra').innerHTML = "second paragraph tag" + tagelement[0].innerHTML;
document.getElementById('classelement').innerHTML = "The first paragraph Class element" + classelement[0].innerHTML;


document.getElementById("demo1").innerHTML = "Date : " + Date();


// Changing HTML Style
document.getElementById("pra").style.color = 'blue';



function myFunction() {
  let x = document.getElementById("num").value;
  let text;
  if (isNaN(x)) {
    text = "Input not valid";
  } else {
    if (x%2==0) {
      text = "Even Number"
    } else {
      text = "Odd Number"
    }
  }
  document.getElementById("result").innerHTML = text;
}

