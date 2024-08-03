// String Search Methods

// 1.  indexOf()
// returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:


let text="Hi I am ,kavi willing to learn futher and further more.";
let index=text.indexOf("kavi");

console.log(index);  //9


// 2.  lastIndexOf()
//lastIndexOf() method returns the index of the last occurrence of a specified text.

let indexSample=text.lastIndexOf("and");
let indexSample2=text.lastIndexOf("And");
let indexSample3=text.lastIndexOf("kavi", 10);
console.log(indexSample);  //38
console.log(indexSample2); //-1 text not found
console.log(indexSample3);  //9

//3. search()
//returns the position of the match

let indexSample4=text.search("willing");

console.log(indexSample4);  //14



