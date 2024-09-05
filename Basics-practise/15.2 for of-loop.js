//loops through the values of an iterable object
//oop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more


//SYNTAX

//for (variable of iterable) {
  // code block to be executed
// }


// Looping over an Array

const myArr=["Apple","orange","pinapple"];

let txt1="";

for(let x of myArr){
    txt1 += x;
}

console.log(txt1);


//Looping over a String

let  mystr="Hello javascript";

let txt2="";

for(let x of mystr){
    txt2 +=x;   
}

console.log(txt2);


