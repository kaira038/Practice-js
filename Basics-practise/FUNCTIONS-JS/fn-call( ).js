// JavaScript call() Method
//invoke (call) a method with an owner object as an argument


const person={
    fullName:function myfunction(){
        return this.firstName +this.lastName;
    }
};

const myobj2={
    firstName:"kavi",
    lastName:"priya"
};

const myobj3={
    firstName:"divya",
    lastName:"priya"
};

console.log(person.fullName.call(myobj2)); //kavipriya
console.log(person.fullName.call(myobj3));  //divyapriya

// call() Method with Arguments

const person2 = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  person2.fullName.call(person1, "Oslo", "Norway");
