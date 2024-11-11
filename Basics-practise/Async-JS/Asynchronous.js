// 1.  Waiting for a Timeout

setTimeout(myfunction,3000); //display afgter 3 s

function myfunction(){
    document.getElementById("demo1").innerHTML="hello world";
}

// you can always pass a whole function as an argument

setTimeout(function(){myfunction2("hello guys");},3000);

function myfunction2(val){
    document.getElementById("demo2").innerHTML=val;
}

// 2. Waiting for Intervals

setInterval(fn,1000);

function fn(){
    let d=new Date();
    document.getElementById("demo3").innerHTML=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
}
//1000 is the number of milliseconds between intervals, so myFunction() will be called every second.



