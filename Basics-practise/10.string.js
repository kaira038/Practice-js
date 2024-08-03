//JAVASCRIPT STRINGS


const stringType1="kavipriya";  //double quote
const stringType2='kavipriya';  //single quote

console.log(stringType1);
console.log(stringType2);
          // both get the same type of result - kavipriya

//Template strings -ES6
//strings enclosed with backticks

const empName=`His name is "kevin" and alalso call him as 'kevin tolly'`;

console.log(empName);


//String length

let text="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(text);
console.log(text.length); //26

//STRING METHOD
// 1. Extracting string characters

const userName="kavipriya";

// 1.1 charAt()

let char= userName.charAt(0);  //k
let charr=userName.charAt(4);  //p

console.log(char);
console.log(charr);

// 1.2 charCodeAt()

let user=userName.charCodeAt(0);  //107  UTF-16

console.log(user);

// 1.3 at(position)Method
 
let platform="W3schools";
let letter=platform[3];  //c


console.log(letter);


//2. Extracting srting parts

//2.1 slice(start,end)

let favFruits="Orange,avacado,fig";
let part1=favFruits.slice(3,11);
let part2=favFruits.slice(7,18);
//omit second parameter , it slice out rest of the things
let part3=favFruits.slice(5);
let part4=favFruits.slice(8);

console.log(favFruits);
console.log(part1);
console.log(part2);
console.log(part3);
console.log(part4);

//2.2 substring(start,end)

// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().

let subStr="Apple,banana,kiwi";
let part5=subStr.substring(6,18);
let part6=subStr.substring(6); //single parameter same as slice

console.log(subStr);
console.log(part5);
console.log(part6);

// 2.3 substr()

// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.


let favVeg="cucumber,capsicum,bottleguard";
let part7=favVeg.substr(6,6);

console.log(favVeg);
console.log(part7);


// 3. converting to upper case and lower case

let employee="Kavipriya";

console.log(employee);
console.log(employee.toUpperCase()); ////all letter will be big
console.log(employee.toLowerCase()); //all letter will be small

// 4. concat()
// joins two or more strings:
//method can be used instead of the plus operator.

let str1="hello"+" "+"world";
let str2="Hello".concat(" ","world!");
let str3="Good".concat(" ","things"," ","takes"," ","time!");

console.log(str1);
console.log(str2);
console.log(str3);

//5. String trim()  - firefox not support
//trim() method removes whitespace from both sides of a string:

let userId="      jagan javid     ";
let userId2=userId.trimEnd();
let userId3=userId.trimStart();

console.log(userId);
console.log(userId2);
console.log(userId3);

//6.  String repeat()

console.log(userId.repeat(3));

//7. replace() 
let userKid="jagan javid";
let repStr= userKid.replace("jagan","jack");  //replace the word in the content.
let repAll= userKid.replaceAll("j","g");

console.log(repStr);
console.log(repAll);

// 8. split()
//A string can be converted to an array with the split() method:
// If the separator is omitted, the returned array will contain the whole string in index [0].

let myArr="a,b,c,d e";
let myArray=myArr.split(",");
let myary=myArr.split(" ");
let myary2=myArr.split();
let ind=myary2[0];

console.log(myArray);
console.log(myArray.length); //4
console.log(myary);
console.log(myary.length);   //2
console.log(myary2);
console.log(myary2.length);
console.log(ind); //a,b,c,d,e











        

