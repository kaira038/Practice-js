//JavaScript Accessors

const person={
    firstName:"kavi",
    lastName:"priya",
    age:22,
    language:"en",
    get lang(){
        return this.language;
    }
};

console.log(person);
console.log(person.lang);

// get method access like a  property


 //set the value

 
const person2={
    firstName:"kavi",
    lastName:"priya",
    age:22,
    language:"",
    set lang(lang){    ///**** set -Set= diff */
        return this.language=lang;
    }
};

//set the value

person2.lang="tamil";


console.log(person2.language);
document.getElementById("demo1").innerHTML=person2.language;



//diff b/w function and getter access


// person.fullname() -  function()
// person.fullname   -  getter acssess


//getter()

const employee={
    emp1:"kavipriya",
    emp2:"jenifer",
    emp3:"nikitha",
    get name(){
        return this.emp2.toUpperCase()+" "+this.emp1.toUpperCase();
    }
};

console.log(employee);
console.log(employee.emp2);
console.log(employee.name);



const employee2={
    emp1:"kavipriya",
    emp2:"jenifer",
    emp3:" ",
    set name2(buddy){
        emp3=buddy.toUpperCase();
    }
};

employee2.buddy= "nikitha";

console.log(employee2.buddy);
console.log(employee2.name2);


//getter simple example

const  rectangle={
    width:"250px",
    hight:"100px",
    get area(){
        return this.hight+" "+this.width;
    }   
};


console.log(rectangle);
console.log(rectangle.area);

//getter complex example-with some logics


const dude={
    firstName:"siva",
    lastName:"prakash",
    year:2000,


    //get fullname
    get fullname(){
        return this.firstName+" "+this.lastName;
    }, //** comma mandotary  */

    //get current age
    get age(){
        const year2=new Date().getFullYear();
        return year2-this.year;
    }


};

console.log(dude);
console.log(dude.fullname.toUpperCase());
console.log(dude.age);  //24


//setter - simple program

const myobj={
    property:"Val",

    //setter method
    set properti(newvalue){
        this.property=newvalue;
    }
};

myobj.properti="val is pure"; //call the setter

console.log(myobj);  //{property: 'val is pure'}
console.log(myobj.property); //val is pure







