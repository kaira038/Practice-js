//JavaScript objects inherit properties and methods from a prototype.

//should not add a new property to existing object
//To add a new property to a constructor, you must add it to the constructor function.
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";  //crt
  }

//   Person.nationality="Hindi";// wrong in object constructor

//PROTOTYPE INHERITANCE

//objects inherit properties and methods from a prototype
//object.prototype is the top most prototype in inherit chain
//Date objects, Array objects, and Person objects inherit from Object.prototype.

//***prototype property allows you to add new properties to object constructors */

function Person2(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person2.prototype.nationality = "English";  //add property

  const mysister=new Person2("nithya","sadhana",15,"black");

  console.log(mysister);
  
  //**prototype property also allows you to add new methods to objects constructors */

  function Person3(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  Person3.prototype.name= function(){    //add method
    return this.firstName+ " "+this.lastName;
  };

  const mycousin=new Person3("rajesh","kumar",24,"black");

  console.log(mycousin);
  console.log(mycousin.name()); //rajesh kumar
  
  
  