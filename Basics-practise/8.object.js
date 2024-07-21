//Define a JavaScript Object

// 1. JavaScript Object Literal
//object literal is a list of name:value pairs inside curly braces {}.


const Person = {
    firstName: "kavi",
    lastName: "priya",
    isWorking: true,
    street: "Lal bahdhur sasthri street",
    town: "chennei",
    pinCode: 606119,
    fullName: function () {
        ` hi ${this.firstName} and ${this.lastName}`;
    }



}

console.log(Person);
console.log(Person.lastName);
console.log(Person.town);
console.log(Person.pinCode);
console.log(Person.fullName);


// 2. Using the new Keyword

const User = new Object();
// console.log(User);  ---- create a empty object

// add properties to the created "user" object
User.firstName = "kavi"; //property... 1
User.lastName = "priya"; //property ...2
User.graduation = "computer aplication"; //property ...3


console.log(User);

//NOTES - object properties in two ways:

// objectName.propertyName; //.....1
// objectName["propertyName"];//...2



// 3. JavaScript Object Methods
//Methods are actions that can be performed on objects.
//Methods are function definitions stored as property values.

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

//   console.log(person);
//Accessing Object Methods

console.log(person.fullName);
console.log(person.fullName());

//Adding a Method to an Object
person.aboutUser = function () {
    return (`${this.firstName} is working as a web developer`);
}

console.log(person.aboutUser);
console.log(person.aboutUser());




//delete keyword deletes both the value of the property and the property itself.

delete person.id;
console.log(person);


//Nested Objects
const car = {
    type: "new",
    model: "m20",
    isAvailableCustomised: true,
    availableColors: {
        red: "royalred",
        blue: ["royalblue", "navyblue", "skybblue"],
        grey: "silvergrey",
        black: "darkblack"
    }
}


console.log(car);
console.log(car.availableColors);
console.log(car.availableColors.blue);
console.log(typeof car.availableColors.blue); //object


//DISPLAY OBJECT
// Create an Object
const employee = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
//Using Object.values()
  const myArray = Object.values(employee);

  console.log(myArray);  //shows like a array

// Stringify Object
  
let myString= JSON.stringify(employee);

console.log(myString);    




