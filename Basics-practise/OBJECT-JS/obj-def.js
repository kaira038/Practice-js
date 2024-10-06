
//1. Objects are variables too. But objects can contain many values.

//2. It is a common practice to declare objects with the const keyword



// OBJECT DEFINITION

//Methods for Defining JavaScript Objects


//1. Object Literal/object initializer


//name/value pairs (or) key/value pair
const myObj={
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
};

console.log(myObj);


//Creating a JavaScript Object

const myObj2={}; //empty obj created {}

myObj2.person1="kavi"; //add key/value pair
myObj2.person2="priya";

console.log(myObj2);              //{person1: 'kavi', person2: 'priya'}
console.log(typeof myObj2);       //object



// 2. Using the new Keyword
//Create an empty JavaScript object using new Object(), and add 4 properties

 
const myObj3=new Object();//empty obj created

// add properties
myObj3.firstName="siva";
myObj3.lastName="prakash";
myObj3.age=24;

console.log(myObj3);              //{firstName: 'siva', lastName: 'prakash', age: 24}



//3.  Using an Object Constructor (object constructor function)

//Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.



//object person type

function Person(first,last,age,eye){   //constructor fn for person obj
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eyeColor=eye;
    this.natinality="indian";  //default values

}

//create person object

const myFather=new Person("sakthi","vel",47,);
//{firstName: 'sakthi', lastName: 'vel', age: 47, eyeColor: 'black'}  --o/p

//creat many person object
const myMother=new Person("vasandha","priya",45,"brown");
const mybrother=new Person("siva","prakash",24,"black");

console.log(myFather);
console.log(myMother);
console.log(mybrother);
console.log(myFather.natinality);

























