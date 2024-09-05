//JavaScript Get Date Methods

// new Date() returns a date object with the current date and time.
//The get methods return information from existing date objects.

const date=new Date();
const month=date.getMonth();
const year= date.getFullYear();

console.log(date);
console.log(month); //7-august
console.log(year); //2024

//sample
const date2=new Date("2002-8-21");
const day=date2.getDay();


console.log(date2);
console.log(day); //3

//sample 
const date3=new Date("aug 8,2025");
const day2=date3.getMonth();

console.log(date3);
console.log(day2);  //7 not aug or august

//You can use an array of names to return the month as a name

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const getMonthMethod= new Date("2002-8-21"); 
let getNameOfMonthSam= months[0];
let getNameOfMonth = months[getMonthMethod.getMonth()];



console.log(months);
console.log(getMonthMethod); //show current date
console.log(getNameOfMonthSam); //january
console.log(getNameOfMonth); //August -result


//You can use an array of names, and getDay() to return weekday as a name

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const kizhamai= new Date("2002-8-21");
let returnAsName=days[kizhamai.getDay()];


console.log(kizhamai);
console.log(returnAsName);  //wednesday


//SET METHOD

const stSample= new Date();
stSample.setFullYear(2021);

console.log(stSample);
     //The setFullYear() method can optionally set month and day

const stMonth= new Date();
stMonth.setMonth(11);

console.log(stMonth);

const stDate=new Date();
stDate.setDate(25);

console.log(stDate);

const stHour=new Date();
stHour.setHours(2);

console.log(stHour);

const stmin= new Date();
stmin.setMinutes(30);

console.log(stmin);

const stsec= new Date();
stsec.setSeconds(30);

console.log(stsec);















