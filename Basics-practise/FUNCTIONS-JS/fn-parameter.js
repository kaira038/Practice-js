function myfunction(x,y=4){ //2nd priority
    return x*y;
}

console.log(myfunction(5)); // 5*4=20 //1st priority- no y value found,so go to 2 nd

console.log(myfunction(6));

//rest parameter

function sum(...args){
    let sum2=0;
    for(arg1 of args) sum2+=arg1;
    return sum2;
}

let x= sum(4, 9, 16, 25, 29, 100, 66, 77);

console.log(x);

//Arguments Object
//JavaScript functions have a built-in object called the arguments object.

//pass by referance- changes happened on orinal val

function modifyValue(obj){
    obj.name="priya";
}

const person={name:"kavi"};

modifyValue(person);

console.log(person.name); //priya










