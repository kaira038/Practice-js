

// typeof - The typeof operator returns the data type of a JavaScript variable.

//Primitive Data Types
let strval= "priya";// string
let numVal= 21; //number
let isHerFromChennai= true; //boolean
let numWithDecimalType= 31.56;//number
let nulltypeValue= typeof null;  //object



console.log(typeof strval);
console.log(typeof numVal);
console.log(typeof isHerFromChennai);
console.log(typeof numWithDecimalType);
console.log(nulltypeValue);


//Complex Data Types

//JavaScript has one complex data type:Object
//All other complex types like arrays, functions, sets, and maps are just different types of objects.
// The typeof operator returns only two types:

// object
// function

const myObj={name:"kavipriya"};  //object
const myArr=[1,2,3];  //object
const myMap= new Map();  //empty arr- object
const mySet= new Set();
function myFunc(){};  //function



let car;  //undefined
let carName="volvo";  //string
carName="bmw"; //value changed
carName=undefined;

//what if empty value

let myName= "";



console.log(typeof myObj);
console.log(typeof myArr);
console.log(myMap);
console.log(typeof myMap); 
console.log(mySet);
console.log(typeof mySet);
console.log(typeof myFunc);
console.log(typeof car);
console.log(carName);
console.log(typeof carName);
console.log(myName);
console.log(typeof myName);  //string





// instanceof operator returns true if an object is an instance of a specified object type


console.log(myArr instanceof(Array));  //true
console.log(myMap instanceof(Map));  //true
console.log(mySet instanceof(Set));  //true









