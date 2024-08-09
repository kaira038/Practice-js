// Array Find and Search Methods

// 1. indexOf()
// searches an array for an element value and returns its position

const fruits=["Apple","orange","mango","berries"];
let val1=fruits.indexOf("Apple");
let val2=fruits.indexOf("mango");



console.log(fruits);
console.log(val1);  //0
console.log(val2);  //2


// 2. lastIndexOf()
let val3=fruits.lastIndexOf("mango")+2;  //2+2=4---->o/p
let val4=fruits.lastIndexOf("Apple")+5;  //0+5=5---->o/p

console.log(val3);
console.log(val4);


// 3. includes()
// check if an element is present in an array 

let val5=fruits.includes("berries");  //true
let val6=fruits.includes("Berries");  //false

console.log(val5);
console.log(val6);









