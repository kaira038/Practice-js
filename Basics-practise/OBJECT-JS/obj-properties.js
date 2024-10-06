//property management methods


//Object.defineProperty()

// SYNTAX:- 
// Object.defineProperty(object, property, descriptor)


// 1. Add new property

const insertNewProperty={
    firstName:"kavipriya",
    lastName:"sakthivel",
    age:22,
    qualification:"BCA"
};


let val1= Object.defineProperty(insertNewProperty,"status",{value:"single"});


console.log(val1);

// 2. change property value

let val2= Object.defineProperty(insertNewProperty,"qualification",{value:"Bsc"});
// let val3= Object.defineProperty(insertNewProperty,"status",{value:"married"});  //to avoid


console.log(val2);
// console.log(val3); //cannot redefine property


//getOwnPropertyNames()  -- List the obj properties
//SYNTAX:--

//Object.getOwnPropertyNames(object)


let val4= Object.getOwnPropertyNames(insertNewProperty);

console.log(val4);  // ['firstName', 'lastName', 'age', 'qualification', 'status']


// set he obj property not enumerable

let val5= Object.defineProperty(insertNewProperty,"age",{enumerable:false});


//get all properties
let val6= Object.getOwnPropertyNames(insertNewProperty);

console.log(val5);
console.log(val6);
console.log(Object.keys(insertNewProperty));












