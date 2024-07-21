//Object Constructor Functions

function Person(first,last,age,eye) {
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eyeColor=eye;
    this.fullName=function () {
        return(`hello ${this.firstName} ${this.lastName}`);
    }
    
}
//creat Person object
const myself=new Person("kavi","priya",20,"brown");

// we can use new Person() to create many new Person objects:

const mySister = new Person("Ananya", "gowri", 18, "green");
const myMother = new Person("vasandha", "priya", 48, "green");
const myFather = new Person("sakthi", "vel", 50, "blue");

//sample 01 : change a Property value to an Object

myFather.eyeColor="black";
myMother.eyeColor="brown";
mySister.eyeColor="black";

//sample 02 : To add a new property, you must add it to the constructor function prototype:

Person.prototype.nationality="english";




console.log(myself);
console.log(mySister);
console.log(myFather.eyeColor);
console.log(myMother.nationality);
console.log(myMother);
console.log(mySister.fullName());
