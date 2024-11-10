// JavaScript Classes - ES6

// JavaScript Classes are templates for JavaScript Objects


// 1. Use the keyword class to create a class
// 2. Always add a method named constructor()

//syntax
class ClassName{
    constructor(){}
}

//sample example

class Car{
    constructor(name,year){
        this.Name=name; //The class has two initial properties 
        this.Year=year  //"name" and "year".
    }
}             //When you have a class, you can use the class to create objects

const car1=new Car("ford",2018);
const car2=new Car("BMW",2020);
              //The example above uses the Car class to create two Car objects.

//Constructor Method:-

// 1. The constructor method is called automatically when a new object is created.
// 2. It is used to initialize object properties
// 3. add any number of methods- example below


class MyCar{
    constructor(name,year){
        this.Name=name;
        this.Year=year;
    }

    age(){
        const date=new Date();
        return date.getFullYear()-this.Year;
    }

}

const mycar=new MyCar("unova",2002);


console.log(mycar.age());  //22


// You can send parameters to Class methods:


class Myself{
    constructor(name,year){
        this.Name=name;
        this.Year=year;
    }

    age(x){
        return x- this.Year;  //2024-2003
    }

}

const dat=new Date();
let year1= dat.getFullYear();  //current year-2024

const myObj=new Myself("kavipriya",2003);

console.log(myObj.age(year1));  //21
console.log(year1);  //2024



//use strict-always :declare with variable keyword
// const dat=new Date();











