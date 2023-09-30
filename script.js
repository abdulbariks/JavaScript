// Types of JavaScript Operators
// Arithmetic Operators
// +	Addition
let sum = 10+10
console.log(sum)
// -	Subtraction
let sub = 10-10
console.log(sub)
// *	Multiplication
let mul = 10*10
console.log(mul)
// **	Exponentiation (ES2016)
let exp = 2**4
console.log(exp)
// /	Division
let div = 2/4
console.log(div)
// %	Modulus (Remainder)
let mod = 5%4
console.log(mod)
// ++	Increment
let x = 10;
x++
console.log(x)
// --	Decremen
let y = 10;
y--
console.log(y)


// Assignment Operators
// =	x = y	x = y
let ax = 10;
let ay = ax;
console.log(ay);
// +=	x += y	x = x + y
let xsum = 10;
xsum += 5;
console.log(xsum)
// -=	x -= y	x = x - y
// *=	x *= y	x = x * y
// /=	x /= y	x = x / y
// %=	x %= y	x = x % y
// **=	x **= y	x = x ** y
// Shift Assignment Operators
// <<=	x <<= y	x = x << y
// let shiftx = 100;
// shiftx <<= 1;
// console.log(shiftx)
// >>=	x >>= y	x = x >> y
// let shiftx = 100;
// shiftx >>= 1;
// console.log(shiftx)
// >>>=	x >>>= y	x = x >>> y
let shiftx = 100;
shiftx >>>= 2;
console.log(shiftx)
// Bitwise Assignment Operators
// &=	x &= y	x = x & y
let bitwisex = 10;
bitwisex &= 10;
console.log(bitwisex)
// ^=	x ^= y	x = x ^ y
let bitwisey = 10;
bitwisey ^= 2;
console.log(bitwisey)
// |=	x |= y	x = x | y
// Logical Assignment Operators
// &&=	x &&= y	x = x && (x = y)
let logicalx = 1;
logicalx &&= 4;
console.log(logicalx)
// ||=	x ||= y	x = x || (x = y)
let logicaly = 12;
logicaly ||= 4;
console.log(logicaly)
// ??=	x ??= y	x = x ?? (x = y)
let logicalz;
logicalz ??= 4;
console.log(logicalz)


// Comparison Operators
// ==	equal to
// let q =10;
// let p =10;
// console.log(p==q)
// ===	equal value and equal type
let q =10;
let p ="10";
console.log(q===p)
// !=	not equal
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to
// ?	ternary operator

// String Operators
let text1 = "Abdul";
let text2 = "Barik";
let text3 = text1 + " " + text2;
console.log(text3)

// Logical Operators
// &&	and	(x < 10 && y > 1) is true	
// ||	or	(x == 5 || y == 5) is false	
// !	not	!(x == y) is true


// Bitwise Operators
// Operator	Description	Example	Same as	Result	Decimal
// &	- AND	- 5 & 1	- 0101 & 0001 -	0001	 - 1
var bita = 5;
var bitb =1;
var bitc = bita & bitb;
console.log(bitc);
// |	OR	5 | 1	0101 | 0001	0101	 5
// ~	NOT	~ 5	 ~0101	1010	 10
// ^	XOR	5 ^ 1	0101 ^ 0001	0100	 4
// <<	left shift	5 << 1	0101 << 1	1010	 10
// >>	right shift	5 >> 1	0101 >> 1	0010	  2
// >>>	unsigned right shift	5 >>> 1	0101 >>> 1	0010	  2

// Ternary Operators
// (condition) ? x : y	(z < 18) ? x : y
let  age = 17;
let testAge = (age >= 18)? "Adult" : "Child";
console.log(testAge);


// Type Operators
let ty = "Barik";
let tx = + y;
console.log(typeof tx)


// Celcius to Fahrenheit Convared
let temp = prompt("Enter Temperature in Celcius:");
let result = 9/5*temp + 32 ;
alert("Fahrenheit:" + result + "Degree");
console.log("Task Complete!")

