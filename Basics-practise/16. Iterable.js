//JavaScript Iterables

//SYNTAX

// for (variable of iterable) {
//     // code block to be executed
//   }

//sample 1 : Iterating Over a String

const mystr= "w3schools-js";
let txt1="";

for(let x of mystr){
    txt1+=x;
}

// console.log(txt1);
document.getElementById("demo1").innerHTML=txt1;


//sample 2: Iterating Over an Array

let txt2="";

const letters = ["a","b","c"];

for(y of letters){
    txt2+=y;
}

console.log(txt2);


//sample 3: Iterating Over a Set

// You can use a for..of loop to iterate over the elements of a Set

//create set
const vowels=new Set(["a","u","i","o","e"]);  //set s should be caps


let txt3="";
for(let z of vowels){
    txt3+=z;
}

console.log(txt3);


//sample 4: Iterating Over a Map

//create a map

const fruits=new Map([["banana",300],["apple",400],["orange",500]]);


//list down

let txt4="";

for(let m of fruits){
    txt4+=m;
}

console.log(txt4);




