const d=new Date();

console.log(d);  //Tue Aug 20 2024 23:22:46 GMT+0530 (India Standard Time)

const dt = new Date("October 13, 2014 11:13:00");

console.log(dt);


const dat = new Date("2022-03-25");

console.log(dat);


const newFormat= new Date(2018,11,24,10,33,30,0);

console.log(newFormat);

// JavaScript counts months from 0 to 11:

// January = 0.
// December = 11.

const dd = new Date(2018, 11, 24, 10, 33, 30);
const ddd = new Date(2018, 15, 24, 10, 33, 30); //overflow to next month
const dats=ddd.toISOString();

console.log(dd);
console.log(ddd);  //can overflow to the next month as well

console.log(dats);

// (YYYY-MM-DD) is also the preferred JavaScript date format:-

// const d = new Date("2015-03-25");

// Date and time is separated with a capital T.

// const d = new Date("2015-03-25T12:00:00Z");


//Date Input - Parsing Dates


let msc=Date.parse("August 21,2024");
const convertFromParse=new Date(msc);

console.log(msc); //1724178600000
console.log(convertFromParse);




