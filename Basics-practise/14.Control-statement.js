//If else
//Switch statement

//1 . If else

// Use "if"       to specify a block of code to be executed, if a specified condition is true
// Use "else"     to specify a block of code to be executed, if the same condition is false
// Use "else if"  to specify a new condition to test, if the first condition is false
// Use "switch"   to specify many alternative blocks of code to be executed.

const currentTime= new Date();
currentTime.getHours();

console.log(currentTime);

// if (currentTime < 18) {
//     console.log("good day");
//   } 
// else {
//     console.log("good evening");
// }

if (currentTime < 18) {
    greeting="Good day";
  } 
else {
    greeting="Good evening";
}

document.getElementById("demo1").innerText=greeting;
document.getElementById("demo1").style.backgroundColor="yellow";



// 2 . switch()

let day;
switch (new Date().getDay()) {
    case 0:
    case 1: // set as  1 ---> shows default value of there is no match.
        day="Sunday";
        break;
    case 2:
        day ="Monday";
        break;
    case 3:
        day ="Tuesday";
        break;
    case 4:
        day="Wednesday";
        break;
    case 5:
        day="Thursday";
        break;
    case 6:
        day="Friday";
        break;
    case 7:
        day="Saturday";
        break;


    default:
        day = "there is no match";
        break;
}

console.log(day);
document.getElementById("demo2").innerText="Today is"+ " "+day;
document.getElementById("demo2").style.color="red";

