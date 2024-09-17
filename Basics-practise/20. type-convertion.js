
// Converting Numbers to Strings

const num="123";
const num2="456";


console.log(num);  //123
console.log(typeof num); //string
console.log(num2.toString()); //456
console.log(typeof num2);  //string



//Converting Dates to Strings

const getNum=new Date();
const conDate=(getNum.toString()); //...


console.log(typeof getNum); //object
console.log(conDate);
console.log(typeof conDate);//string

// converting boolean to number and string

const getNumber= Number(true); //1
const getasStr= String(false);
const bool=true;

console.log(getNumber);
console.log(getasStr);
console.log(bool);
console.log(typeof bool);  //boolean
console.log(typeof getasStr); //string
console.log(typeof getNumber); //Number









