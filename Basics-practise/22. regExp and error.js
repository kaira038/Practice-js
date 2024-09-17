//sequence of characters that forms a search pattern.


//SUNTAX  -->  /pattern/modifiers;
//regular expressions are often used with the two string methods: search() and replace()

//1 . search() method

let text= "Visit w3school for learning js";
let n=text.search("js");

console.log(n);  //28  --returns the position of the match


//1.1 . regular expression to do a case-insensitive

let m= text.search(/Js/i);

console.log(m);  //28



//2. replace() method

let p=text.replace(/Js/i,"Javascript");

console.log(p);  //Visit w3school for learning Javascript



//RegExp Object
//It searches a string for a pattern, and returns true or false, depending on the result.

// Using test()

const pattern=/e/;
pattern.test("The best things in life are free!");

console.log(pattern.test());//true



//shortened method

const ptn=/e/.test("hey are you there!");

console.log(ptn);  //true


// Using exec()
//and returns the found text as an object.//If no match is found, it returns an empty (null) object.

const exPattern= /e/.exec("hi all, would u need any help");

console.log(exPattern); 
console.log(exPattern.index);  //17





// JS - ERRORS



try{
    addlert("welcom");
}
catch(err){
    console.log(err); //ReferenceError: addlert is not defined
    console.log(err.message); //addlert is not defined  
}

// Notes

// try  - block of code to be tested for errors while it is being executed.
//catch()- define a block of code to be executed, if an error occurs in the try block.


// try {
//     Block of code to try
//   }
//   catch(err) {
//     Block of code to handle errors
//   }

//throw


    const message=document.getElementById("demo1");
    let x= 3;
    
    try{
        if (x<0) throw" o is not valuable number";
        if(x>1)throw "its very low number";
        if(x<13)throw"its vary high number, dont try more then 10";
    }
    catch(err){
        message.innerHTML="the costom error throw here"+" "+err;

    }
   
    finally{
        message.innerHTML="the costom error";   
    }

   
    console.log(message);
    







