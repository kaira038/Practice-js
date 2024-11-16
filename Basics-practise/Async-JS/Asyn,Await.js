
//JavaScript Async

//"async and await make promises easier to write"

//async makes a function return a Promise
// keyword async before a function makes the function return a promise:

function myDisplayer(some){
    document.getElementById("demo1").innerHTML=some;
}

 async function myfunction(){
    return"hello world";
}

myfunction().then(
    function(value){myDisplayer(value);},
    function(error){myDisplayer(error);}
);



//Await Syntax

// The await keyword can only be used inside an async function.

//function pause the execution and wait for a resolved promise before it continues

// let value = await promise;

async function myDisplayer5() {
    let myPromise=new Promise(function(myresolve,myreject){
        myresolve("heloooo");
    });

    document.getElementById("demo6").innerHTML=await myPromise;   
}

myDisplayer5();


//same example without reject

// async function myDisplayer6(){
//     let createPromise= new Promise(function(resolve){
//         resolve("I love you!!");
//     });

//     document.getElementById("demo7").innerHTML=await createPromise;
// }

// myDisplayer6();


//set time to execute


async function myDisplayer6(){
    let createPromise= new Promise(function(resolve){
        setTimeout(function(){resolve("I love you!!");},3000)
    });

    document.getElementById("demo7").innerHTML=await createPromise;
}

myDisplayer6();



