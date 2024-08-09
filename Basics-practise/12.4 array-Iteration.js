//ARRAY ITERATION


// 1. forEach() method calls a function (a callback function) once for each array element

// 1. 
const fruit = ["apple", "grapes", "pinapple"];

fruit.forEach((fruit) => {
    console.log(fruit.toUpperCase());

})
// 2.
// const num=[1,2,3,4,5];

// num.forEach(function(currentvalue,index,array){
//     console.log(index,currentvalue,array);
    
// })


const myNumber=[2,4,6,8,10];
 

myNumber.forEach(display);
myNumber.forEach(double);

function display(element) {
    console.log(element);//------>1
    
}
function double(element,index,array) {
    array[index]=element*2;
}

console.log(myNumber);

const fruities=["Apple","Orange","Plum","Avacado"];

// fruities.forEach(upperSide);
// fruities.forEach(lowerSide);
fruities.forEach(capitalized);
fruities.forEach(display);

function upperSide(element,index,array) {
    array[index]=element.toUpperCase();
    
}
function lowerSide(element,index,array) {
    array[index]=element.toLowerCase();
}

//lets capitalize only 1st element also the 1st letter in each element

function capitalized(element,index,array) {
    array[index]=element.charAt(0).toLowerCase() + element.slice(1);
    // console.log(element.charAt(0).toUpperCase()+element.slice(1));
    
}

function display(element) {
    console.log(element);
    
}


var employee=[
    {name:"kavipria",age:21,city:"chennai"},
    {name:"indhra",age:22,city:"chennai"}, 
    {name:"laxmi",age:22,city:"TVM"},  
    {name:"divya",age:22,city:"TVM"}   
];

employee.forEach(function(currentvalue,index) {
    console.log(index,currentvalue);
    
})

// console.log(employee);
// console.log(employee[0]);
// console.log(employee[0].name);

// 2. map()

// creates a new array by performing a function on each array element

// const vegies=["tomato","potato","beans","carrot"];
// const vegies2=vegies.map(myFunction);

// function myFunction(value) {
//     console.log(`hi dear,we need to buy ${value}`);
    
// }

const num1=[2,6,8,3];
const num2=num1.map(myFunction);

console.log(num2);

function myFunction(value) {
    return value*2;
}


//key differance b/w for each and map method

// map() - -> returns new array, still have a original numbers
//for each change it.

// Callback function - fn passed as argument to another function


// sample 3

const student=["Kavi","Priya","Keerthi","kiruba","ramya"];
const studentUpper=student.map(onupperCase);
const studentLower=student.map(onLowercase);


console.log(studentUpper);
console.log(studentLower);


function onupperCase(value) {
    return value.toUpperCase();
}
function onLowercase(value) {
    return value.toLowerCase();
}

// sample -4 Rearrage the dates

const dates=["2024-03-20","2024-01-04","2024-06-31","2024-8-21"];
const formattedDate= dates.map(formatDate);

console.log(formattedDate);


function formatDate(element) {
    const parts= element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

// flatMap() method 

const myArr = [1, 2, 3, 4, 5, "six"];

const newArr=myArr.flatMap(newcon);

function newcon(element) {
    console.log(element*2);
    
}

//Difference between map() and flatmap()



// 1.map()
// /Use Case: Use map() when you want to transform each element in an array independently

const egArr1=[1,2,3];
const egArr2=egArr1.map(minearrys);

function minearrys(element) {
    // console.log(element,element*2);
    console.log(element*element);  
    //Return the square so it is included in the new array
    return element*element;
}

console.log(egArr2);  //Array [ 1, 4, 9 ]
//Results in an array of the same length as the original.


// 2 .flatMap() 
// Use Case: Use flatMap() when you want to transform elements and also concatenate the results into a single array.

const egArr3=[1,2,3];
const egArr4=egArr1.map(minearry);

function minearry(element) {
    // console.log(element,element*2);
    return [element,element*2];
    //return [element,element-1,7];
}

console.log(egArr4);
// May result in an array of different length due to flattening.


// 3. filter()
// creates a new array with array elements that pass a test.

const age=[45,31,9,4,11,16,23,14,16,33,26,17];
const sample=age.filter(filterMethodSample);

function filterMethodSample(element) {
    return element>18;

}

console.log(sample);


// 4. reduce() 
// left-to-right in the array
//method does not reduce the original array.
//purpose -sum numbers, concatenate strings, or combine objects.
//rray method that allows you to accumulate or reduce an array into a single value 


// function takes 4 arguments:total (the initial value / previously returned value), item value, item index, array itself


const supremeNumber=[45, 4, 9, 16, 25];
const sum=supremeNumber.reduce(reduceMethod,2);

function reduceMethod(total,value,index,array) {
    // return total+value;
    // return total; //2 itial value is 2 otherwise it will be 45.
    return total+value;
}

console.log(sum);


