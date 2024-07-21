// 1. Cannot be Reassigned

// const PI = 3.14;
// PI=5.6; // This will give an error
// PI=PI+10; // This will also give an error
    

// // 2. Must be Assigned

// const PI = 3.14159265359; //correct


// const PI;l
// PI = 3.14159265359;   //Incorrect


// 3. Use const when you declare:array,obj,fn,regexp

//we cannot reassingn a constant value,array,object
//but ,we can change the elements of constant array and properties of constant object.

const myArr=["apple","banana","grape","orange"];

myArr[1]="guava"; //change the element

myArr.push("berries"); //add element by push() method

console.log(myArr);

//But we can NOT reassign the array:

// myArr=["stawberry","blueberry","blackberry","cranberry","raseberry"];

// console.log(myArr); //throws error


//Constant Objects

const myObj={
    carName:"BMW",
    color:"royalblue",
    model:500,
    type:"c6"
}

myObj.color="royalred"; //change the property

myObj.owner="john"; //add a property

console.log(myObj);

// But you can NOT reassign the object: here myObj
//  myObj={
//     carName:"BM",
//     color:"blue",
//     model:800,
//     type:"z6"
// }

// console.log(myObj);


//BLOVCK SCOPE

const x = 10;
// Here x is 10

{
const x = 2;
// Here x is 2
}

// Here x is 10

