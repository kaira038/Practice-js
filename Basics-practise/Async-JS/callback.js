
//CALLBACK

//A callback is a function passed as an argument to another function.
//This technique allows a function to call another function.



//1. Function Sequence
//JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

function myDisplayer(some){
    document.getElementById("demo1").innerHTML=some;
}
function myFunction1(){
    myDisplayer("Hello");
}

function myFunction2(){
    myDisplayer("Hi");
}

// myFunction1();
// myFunction2();

myFunction2();
myFunction1();

// const deliverResult=myFunction1();
// console.log(deliverResult);


// console.log(myFunction1());  //undefined

//otherway
// function myFunction3(){
//   return "hello";

// }

// function myFunction4(){
//     return "hi";
// }

// myFunction3(); -not working this way 
// // console.log(myFunction1());//undefined
// const deliver=myFunction3();
// console.log(deliver);


// Sequence Control
// Suppose you want to do a calculation, and then display the result.
function myDisplayer2(some){
    document.getElementById("demo2").innerHTML=some;
}

function myCalculator(num1,num2){
    let sum=num1+num2;
    return sum;
}

let result= myCalculator(5,3);

myDisplayer2(result);

//OR
// you could call a calculator function (myCalculator), and let the calculator function call the display function (myDisplayer)

function myDisplayer3(some){
    document.getElementById("demo3").innerHTML=some;
}

function myCalculator3(num1,num2){
    let sum=num1+num2;
    myDisplayer3(sum);
}

myCalculator3(3,3);  //6 on demo3


// JavaScript Callbacks
// A callback is a function passed as an argument to another function.


function myDisplayer4(some){
    document.getElementById("demo4").innerHTML=some;
}

function myCalculator4(num1,num2,myCallBack){
    let sum=num1+num2;
    myCallBack(sum);  //4
}

myCalculator4(2,2,myDisplayer4);

// myCalculator4(2,2,myDisplayer4()); //error -() dont use parenthesis



