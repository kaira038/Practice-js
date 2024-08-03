// NUMBERS
//JavaScript has only one type of number. Numbers can be written with or without decimals.
let x = 3.14;    
let y = 3;   

console.log(x);
console.log(y);

// Numbers are added. Strings are concatenated.

//sample 1
let x1 = 10;
let y1= 20;
let z1 = x1 + y1;

console.log(z1); //10+20=30 30 will be o/p

//sample 2
let x2= 10;
let y2 = "20";
let z2 = x2 + y2;

console.log(z2);  //1020 
console.log(typeof z2); //string

//If you add a string and a number, the result will be a string concatenation
 let p=10;
 let q="10";
 let pq=p+q;

 console.log(pq);

//  JavaScript will try to convert strings to numbers in all numeric operations:

let x3 = "100";
let y3 = "10";
let z3 = x3 / y3;

console.log(z3); //10 

let x4= "100";
let y4 = "10";
let z4 = x4 * y4;

console.log(z4);// 1000

let x5 = "100";
let y5 = "10";
let z5 = x5 - y5;

console.log(z5);  //90

// but this will not work:

let x6 = "100";
let y6 = "10";
let z6 = x6 + y6;

console.log(z6);  //10010 - concat   + operator


//NaN - Not a Number
//Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

let x7 = 100 / "Apple";

console.log(x7);// NaN

//However, if the string is numeric, the result will be a number:

let x8 = 100 / "10";

console.log(x8);  //10


// isNaN()  --find out if a value is a not a number:

let x9 = 100 / "Apple";

console.log(isNaN(x9)); //true


//NOTES

//typeof NaN returns number:
//typeof Infinity returns number.

// 1. toString() method

let num=33;


console.log(num);
console.log(typeof num.toString(33));

// 2. JavaScript Numbers as Objects not recommended to use
//numbers can also be defined as objects with the keyword new:

let m = new Number(123);

console.log(m); // return as object
console.log(typeof m);


