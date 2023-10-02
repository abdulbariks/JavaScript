// Control Flow
// Conditional Statements
// if statement
// if (condition) {
//     //  block of code to be executed if the condition is true
// }
let age = 20;
if (age>18) {
console.log("Young")
}

// else Statement
// if (condition) {
//     //  block of code to be executed if the condition is true
//   } else {
//     //  block of code to be executed if the condition is false
//   }
if (age>18) {
console.log("Young")
}else{
    console.log("Child")
}


// else if Statement
// if (condition1) {
//     //  block of code to be executed if condition1 is true
//   } else if (condition2) {
//     //  block of code to be executed if the condition1 is false and condition2 is true
//   } else {
//     //  block of code to be executed if the condition1 is false and condition2 is false
//   }
let Number = 52;
// let Number = prompt("Enter Your Number:")
if (Number >=80 && Number <=100) {
 console.log(`You Got A+`)
}
else if(Number >=70 && Number <80) {
    console.log(`You Got A`)
   }
   else if(Number >=60 && Number <70) {
    console.log(`You Got A-`)
   }
   else if(Number >=50 && Number <60) {
    console.log(`You Got B`)
   }
   else if(Number >=40 && Number <50) {
    console.log(`You Got C`)
   }
   else if(Number >=0 && Number <40) {
    console.log(`You Got F`)
   }else{
console.log(`Invalid Number`)
   }


//    Compering 3 Number
let num1 = 50;
let  num2 = 100;
let num3 = 55;
if (num1>num2 && num1>num3) {
   console.log(`large Number is ${num1}`)
}
else if (num2>num1 && num2>num3) {
    console.log(`large Number is ${num2}`)
 }else{
    console.log(`large Number is ${num3}`)
 }

//  Nested if else statement
if (num1>num2){
    if (num1>num3) {
        console.log(`large Number is ${num1}`)
    } else {
        console.log(`large Number is ${num3}`)
    }
 }
 else if (num2>num1) {
    if (num2>num3) {
        console.log(`large Number is ${num2}`)
    } else {
        console.log(`large Number is ${num3}`)
    }
  }else{
    console.log(`large Number is ${num3}`)
  }

// Simple Calculator
  let number1= prompt(`Enter Your First Number:`)
  number1 =parseFloat(number1)
  let number2= prompt(`Enter Your Second Number:`)
  number2 = parseFloat(number2)
  console.log(`Select an Option`)
  console.log(`1. Addition`)
  console.log(`2. Subtraction`)
  console.log(`3. Multiply`)
  console.log(`4. Divition`)
  let value = prompt(`Select Option`)
  value = parseFloat(value)
    if (value===1) {
      console.log(`${number1+number2}`)
  }
  else if (value===2) {
    console.log(`${number1-number2}`)
} else if (value===3) {
    console.log(`${number1*number2}`)
}else if (value===4) {
    console.log(`${number1/number2}`)
}else{
    console.log(`Invalid Input!`)
}



// JavaScript Switch Statement
// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }
let letter = prompt(`Enter Your Letter:`);
switch (letter) {
  case 'a':
  case 'A':
    letter = "Vauale";
    break;
  case 'e':
  case 'E':
    letter = "Vauale";
    break;
  case 'i':
  case 'I':
    letter = "Vauale";
    break;
  case 'O':
  case 'o':
    letter = "Vauale";
    break;
  case 'u':
  case 'U':
    letter = "Vauale";
    break;
    default:
        letter = "Consolente";
}
console.log(letter);

// Simple Calculator Using Switch Statement
let numb1= prompt(`Enter Your First Number:`)
number1 =parseFloat(numb1)
let numb2= prompt(`Enter Your Second Number:`)
number2 = parseFloat(numb2)
let option = prompt(`Select Option:`)
option = parseInt(option)

let result = null;

let num1con =isNaN(numb1)
let num2con =isNaN(numb2)
let optioncon=isNaN(option)


if (num1con || num2con || optioncon) {
    console.log("Invalid Input");
} else {
    switch (option) {
        case 1:
            result = numb1+numb2;
            break;

        case 2:
            result = numb1-numb2;
            break; 
            
         case 3:
             result = numb1*numb2;
            break;    
        case 4:
            result = numb1/numb2;
            break;
    
        default:
            break;
    }
    
    if (result== num1) {
        console.log('No Result')
    } else {
        console.log(`Result : ${result}`)
    }
    
}
