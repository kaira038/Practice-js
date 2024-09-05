

//loops through the properties of an Object


//SYNTAX:-

//for (key in object) {
  // code block to be executed
// }


const person= {fname:"Kavi",
    age1:21,
    lname:"priya",
    age2:22
};

let text="";

for( let x in person){
    text +=person[x];
}

// console.log(text);
document.getElementById("demo1").innerHTML=text;
console.log(text);

//NOTE      person[x]----> value of key


// JavaScript for in statement can also loop over the properties of an Array

//SYNTAX

// //for (variable in array) {
//     code
// }


const myarr=[22,56,84,11,64,55];

let text2="";

for(let x in myarr){
    text2 +=myarr[x];
}

console.log(text2);
document.getElementById("demo2").innerHTML=text2;

//// *Do not use for in over an Array if the index order is important.

//Foe each()
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value;
}

console.log(txt);
