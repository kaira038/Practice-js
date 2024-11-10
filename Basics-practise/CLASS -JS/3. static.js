//Static class methods are defined on the class itself.
//You cannot call a static method on an object, only on an object class.


class Car{
    constructor(name){
        this.Name=name;
    }

    static hello(){
        return "Hello!";
    }
}
const myObj=new Car("ford");

document.getElementById("demo1").innerHTML=myObj.Name;

// document.getElementById("demo2").innerHTML=myObj.hello();  //error

document.getElementById("demo3").innerHTML=Car.hello();

document.getElementById("demo4").innerHTML=Car.hello()+" "+myObj.Name;


// If you want to use the myCar object inside the static method, you can send it as a parameter

class Employee{
    constructor(name){
        this.empName=name;
    }

    static hi(x){
        return "Hello" +" "+x.empName;
    }
}

const obj=new Employee("Vasu");

document.getElementById("demo5").innerHTML=Employee.hi(obj);
