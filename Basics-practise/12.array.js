//ARRAY

const cars = ["Saab", "Volvo", "BMW"];

console.log(cars); //array

//or -A declaration can span multiple lines

const carss = [
    "Saab",
    "Volvo",
    "BMW"
  ];

console.log(carss);  

// 1. create an array, and then provide the elements

const vegies=[];  //----> empty array created

//add elements to the created array
vegies[0]="tomato";
vegies[1]="potato";
vegies[2]="onion";
vegies[3]="carrot";

console.log(vegies);  //----> return array with 4 elements

// 2. Access an array element by referring to the index number
const friuts=["apple","orange","banana","jackfruit","berries"];

console.log(friuts[3]); //----> jackfruit

// 2.1 Changing an Array Element
friuts[3]="guova";   //-------> replace jackfruit to guova

// 2.2 Converting an Array to a String
console.log(friuts.toString());

// 2.3 Array Properties and Methods
let val= friuts.length;
let fruit=val-1;



console.log(friuts);
console.log(val); //5
console.log(fruit); //4


// 3. Adding Array Elements -push()

friuts.push("lemon");

console.log(friuts);


const fruity = ["Banana", "Orange", "Apple"];
fruity[6] = "Lemon";  // Creates undefined "holes" in fruits

console.log(fruity);

//NOTES


//Difference Between Arrays and Objects  --- !importent

// arrays use numbered indexes.  
// objects use named indexes.
// You should use objects when you want the element names to be strings (text).
// You should use arrays when you want the element names to be numbers.



// 4. JavaScript "new Array()"- built-in array constructor 

// 4.1 both create new empty array
const points = new Array();
const point = [];

console.log(point);
console.log(points);

// 4.2 pass an elements to created array
// const num1=new Array(20,40,60,80,100);
// const num2=[20,40,60,80,100];

const no1=new Array(60);// not recommended - avoid using new array method

const no2=[20];

console.log(no2);
console.log(no1);


// 5 . How to Recognize an Array

//type of
//is Array
//instanceof 

const berries=["stawberry","cranberry","raseberry","blueberry"];

console.log(berries);
console.log(typeof berries); //object  ----> not recommended to use 
console.log(Array.isArray(berries)); //true
console.log(berries instanceof Array);  //true


// 6. Nested Arrays and Objects

const myObj={
    name:"kavipriya",
    age:21,
    coworkers:[
        {seniors:2,QC:["durga","lalitha"]},
        {juniors:["krithika","ajitha","sowmiya","ashwini"],others:["jennifer","nikitha","sandhanalaxmi"]}
    ]
}

console.log(myObj);
console.log(myObj.coworkers[1]);
console.log(Array.isArray(myObj.coworkers)); //true
console.log(Array.isArray(myObj.coworkers[1])); //false
console.log(typeof myObj.coworkers[1]); //object

console.log(myObj.coworkers[1].others); 
console.log(typeof myObj.coworkers[1].others); //object
console.log(Array.isArray(myObj.coworkers[1].others)); //true
console.log(myObj.coworkers[1].others[0]); //jennifer
console.log(typeof myObj.coworkers[1].others[0]);  //string

// Values in objects can be arrays
// values in arrays can be objects

