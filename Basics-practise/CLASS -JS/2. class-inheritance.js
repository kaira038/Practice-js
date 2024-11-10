///EXAMPLE- class Inheritance

//create parent class

class ParantClass{
    constructor(father){
        this.FatherName=father;
    }

    myfather(){
        return"My father name is"+" "+this.FatherName;
    }
}

//create child class

class ChildClass extends ParantClass{
    constructor(father,mother){
        super(father);
        this.MotherName=mother;
    }

    show(){
       return "My parents are"+" "+this.FatherName+ " and "+this.MotherName;
    }
}


//return result from child class which inherits method from parent class
const objForClass= new ChildClass("sakthivel","Vasantha");

console.log(objForClass.show());

//return result from parent class only
const myObj= new ParantClass("sakthivel");

console.log(myObj.myfather());




// extends keyword  --->To create a class inheritance, use the extends keyword.
// super   keyword ---->super() method refers to the parent class.


