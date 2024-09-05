//while loop

//The while loop loops through a block of code as long as a specified condition is true.


//SYNTAX

// while (condition) {
    // code block to be executed
//   }

let i=0;
txt3="";

while(i<10){
    txt3 += "The number is"+" "+i+"/";
    i++;
    
}

// console.log(txt3);
document.getElementById("demo1").innerHTML=txt3;



//Do while loop

// execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

//SYNTAX:-

//do {
  // code block to be executed
// }
// while (condition);



let j=0;
let txt4="";
do{
    txt4 +="The no is"+" "+j+".";
    j++;
}
while(j<9);

// console.log(txt4);
document.getElementById("demo2").innerHTML=txt4;




//break statement "jumps out" of a loop.
//The continue statement "jumps over" one iteration in the loop.


