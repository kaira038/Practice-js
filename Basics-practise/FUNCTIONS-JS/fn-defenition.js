//JavaScript Function Definitions

// 1. function declaration


function myFunction(a,b){
    return a*b ;
}


let x=myFunction(2,3);
console.log(x);  //6


// 2. function expression - no fn name (anonymous fns)/ store in a variable

const m= function(a,b){
    return a*b;
}

console.log(m(4,4)); //16


// 3.  function constructor() -not recomended 

const myfunction = new Function("x", "y", "return x*y");

let y2=myfunction(2,2);

console.log(y2); //4


// 4. function hoisting() -JavaScript functions can be called before they are declared

myfnbehavior(5);


function myfnbehavior(y){
    return y*y;
}


// 5. self invoking function (anonymous self-invoking function)

let p=(function myfninvoke(){
    return `hello`;
})();


console.log(p);



// 6. Functions Can Be Used as Values

function myFunctions(a,b){
    return a*b;
}

let useAsValue= myFunctions(4,2)*2; //expressioon

console.log(useAsValue); //16

// 7. Functions are object - JavaScript functions have both properties and methods.

function returnnoArgument(x,y,z){
    return arguments.length ;
}

let val=returnnoArgument(1,2);
let text =returnnoArgument.toString();

console.log(val); //2
console.log(text);


// 8. Arrow function

//ES5
function minefunction(p,q){
    return p+q;
}

console.log(minefunction(2,2)); //4


//instead (short hand ES6 )

const minefunctions =(p,q)=> p+q;

console.log(minefunctions(2,2));  //4













