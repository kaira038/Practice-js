// 1. without object- but there is a default global object

function myFunction(a, b) {
    return a * b;
}


  let x= myFunction(4, 2);  

console.log(x);  //8

  let y= window.myFunction(2,2);

console.log(y);  //4

//  2.Invoking a function as a method

const person={
    firstName:"kavi",
    lastName:"priya",
    fullName:function myFunction2(){
        `${this.firstName} is primerily called and second one is${this.lastName}`;
    }
}

console.log(person);

// invoke function

console.log(person.fullName);



// Note:  person is the owner of the function, this work on object
// without owner of the fn, it will target to window- "this keyword".


//sample 
const person2={
    firstName:"kavi2",
    lastName:"priya2",
    fullName:function(){
        return this;
    }
}

//both have the same result

console.log(person2.fullName());
console.log(person2);


// Invoking a Function with a Function Constructor


function myFunction3(arg1,arg2){
    this.firstName=arg1;
    this.lastName=arg2;
}

const myobj=new myFunction3("divya","priya");

console.log(myobj.firstName);
console.log(myobj.lastName);  // constructor invocation.

//constructor invocation creates a new object. 
//The new object inherits the properties and methods from its constructor.




