// unpack object properties into variables.
// unpack arrays and any other iterables.


//Object Destructuring

//Object Default Values

const Person={
    firstName:"Kavipriya",
    lastName:"sakthivel"
};

//destructuring
let {firstName,lastName,age=22}=Person;

console.log(age);

//Object Property Alias(alias mean lso known as)
const person2={
    name:"priya",
    age:22,
};

let {name:empName}=person2;


console.log(person2);
console.log(empName);//priya

//Array Destructuring

const fruits=["apple","orange","pinapple","watermelon"];


let [fruit1,fruit2]= fruits;

console.log(fruits);
console.log(`${fruit1} and ${fruit2}`);

// Skipping Array Values

const fruity=["apple","orange","pinapple","watermelon"];

let [fruity1,,fruity2]=fruity;

console.log(`${fruity1} and skipped 2 fruit here,then ${fruity2}`);




// const a=[1,2,3];
// const b=[...a,3,4];

// console.log(b);

const {a,b}={a:10,b:20,c:30};

console.log(a,b);

let m=5;
let n=m++;

console.log(n);

const nums=[1,2,3];

nums[1]=5;

console.log(nums);







