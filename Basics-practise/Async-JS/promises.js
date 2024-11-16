// A Promise is an Object that links Producing code and Consuming code

//Promise Syntax

let myPromise= new Promise(function(myResolve,myReject){
   // "Producing Code" (May take some time)

   myResolve();  //when sucessfull
   myReject();   //when reject

});


// "Consuming Code" (Must wait for a fulfilled Promise)

myPromise.then(
    function(value){   },  // code if successful
    function(error){   }   //code if some error
   
);


// Promise.then() takes two arguments, a callback for success and another for failure

//EXAMPLE
function myfunction(some){
    document.getElementById("demo1").innerHTML=some;  //Ok
}

let myPromise2= new Promise(function(myResolve,myReject){

    let x=0;
    // producing code

    if(x==0){
        myResolve("Ok");
    }else{
        myReject("Error");
    }
});


//consuming code

myPromise2.then(
    function(value){myfunction(value)},
    function(error){myfunction(error)}
);

//JavaScript Promise Examples
// Waiting for a Timeout
setTimeout(function(){myfunction2("hi world");},3000);

function myfunction2(value){
    document.getElementById("demo2").innerHTML=value;
}

myfunction2();


//same example using promise

let myPromise3= new Promise(function(myResolve,myReject){
    setTimeout(function(){myResolve("hello guys");},3000);
});

myPromise3.then(function(value){
    document.getElementById("demo3").innerHTML=value;
});


//waiting for file (doubt)


function myDisplayer(some){
    document.getElementById("demo4").innerHTML=some;
}

function getFile(mycallback){
    let req=new XMLHttpRequest();
    req.onload=function(){
        if(req.status==200){
            mycallback(this.responseText);
        }else{
            mycallback("Error: " + req.status);
        }
    }
    req.open('GET',"car.html");
    req.send();
}

getFile(myDisplayer);

