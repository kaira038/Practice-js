//VARIABLES
x=2;
y=3;
z=x*y;

console.log(z);

//use let keyword
let a=3;
let b=3;

console.log(a,b);

//use var keyword
var p=2;
var q=2;

console.log(p,q);

//use const keyword
const m=1;
const n=1;

console.log(m,n);
//Mixed Example
let num1=5;
let num2=6;
var num3=num1+num2;
const num4=num3-2;

console.log(num1,num2);
console.log(num3);
console.log(num4);

// NOTES:- Variables are containers for storing values.

//A declaration can span multiple lines:
let person = "John Doe",
carName = "Volvo",
price = 200;

console.log(person,carName,price);

//Value = undefined
// A variable declared without a value will have the value undefined.
let username; 

console.log(username);

// Re-Declaring JavaScript Variables
//If you re-declare a JavaScript variable declared with var, it will not lose its value.
var userName="indhu";
var userName="kavi";

console.log(userName);

//can do arithmetic with JavaScript variables
let numAdd = 5 + 2 + 3;
console.log(numAdd);

let numString ="Divya"+" "+"priya";
console.log(numString);

//If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
let concat ="5" + 2 + 3;
console.log(concat); // 523 ---o/p

let cooncat= 2 + 3 + "5";
console.log(cooncat); // 55 ---o/p

//JavaScript Dollar Sign $
let $ = "Hello World";
console.log($);

//JavaScript Underscore (_)
let _name="siva";
console.log(_name);