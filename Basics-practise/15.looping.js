// Loops can execute a block of code a number of times.



//Different Kinds of Loops

//1. for - loops 
//2. for/in - loops 
//3. for/of - loops
//4. while - loops 
//5. do/while - also loops 


//1 . For loop


const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];  // create array

// console.log(cars);
let text="";
for (let i = 0; i < cars.length; i++) {
   text +=  cars[i];
}

document.getElementById("demo1").innerHTML=text;

// Notes 1 : 3 expressions available - Initialize,Condition,Iteration
// Notes 2 : You can initiate many values in expression 1 (separated by comma)
// Notes 3 : you can omit expression 1 (like when your values are set before the loop starts)

// note 2 sample:

for (let i = 0, len = cars.length, text = ""; i < len; i++) {
    text += cars[i] + "<br>";
}

//let i = 0, len = cars.length, text = ""   ---> expression 1


//note 3 sample:

let i = 2;
let len = cars.length;
let texts = "";
for (; i < len; i++) {   //here, 1st expression is empty
  texts += cars[i] + "<br>";
}



//Expression 2
//If expression 2 returns true, the loop will start over again. If it returns false, the loop will end.
//If you omit expression 2, you must provide a break inside the loop.


//Expression 3
//Expression 3 can do anything like negative increment (i--), positive increment (i = i + 15), or anything else.

//note sample 
let a = 0;
let lens = cars.length;
let texty = "";
for (; a < len; ) {  // omit here the 3rd increement expression
  texty += cars[a] + "<br>";
  a++;    //aplied here the 3rd expression
}



// LOOP SCOPE

var p = 5;

for (var p = 0; p < 10; p++) {
  // some code
}

// Here p is 10

console.log(p);



let m = 5;

for (let m = 0; m < 10; m++) {
  // some code
}

// Here m is 5


//let is block scope

