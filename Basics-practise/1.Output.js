
// Display possiblities


// 1.Writing into an HTML element, using innerHTML.
// 2.Writing into the HTML output using document.write().
// 3.Writing into an alert box, using window.alert().
// 4.Writing into the browser console, using console.log().

// 1. InnerHTML 

// The id attribute defines the HTML element. The innerHTML property defines the HTML content

let calci= document.getElementById("demo").innerHTML=5+6; //11---o/p
calci=document.getElementById("demo").innerHTML="5+6";// 5+6 (string)---o/p
calci=document.getElementById("demo").innerText=5+6; // 11(number) ---o/p
calci=document.getElementById("demo").innerText="5+6"; //5+6 (string) ---o/p

//then what is the difference b/w them?

//let insertTag=document.getElementById("demo").innerText=<p>insert sample tag</p>; //occur syntax error also using innerhtml without ""
var insertTaag=document.getElementById("demo").innerText="<p>insert sample tag</p>"; // shows as a string can't insert a whole tag
var insertTag=document.getElementById("demo").innerHTML="<p>insert sample tag</p>"; // can insert tag also UI shows the only text not tags


console.log(insertTag);
console.log(insertTaag);
console.log(calci);
console.log(typeof calci);



//3.alert box - throw alert msg

window.alert("hello world");





