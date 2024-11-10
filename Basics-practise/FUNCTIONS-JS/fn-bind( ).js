// Function bind()
// borrow a method from another object.

const person1={
    firstName:"kavi",
    lastName:"priya",
    fullName:function(){
        return this.firstName+" "+this.lastName;
    }
}

const person2={
    firstName:"nithya",
    lastName:"priya",
}

let fullName=person1.fullName.bind(person2);

console.log(fullName());

//display result after 3 seconds

const member={
    firstName:"siva",
    lastName:"prakash",
    display:function(){
        let x= document.getElementById("demo1");
        x.innerHTML= this.firstName+" "+this.lastName;
    }
}

// console.log(member.display());
// setTimeout(member.display,3000);
let display= member.display.bind(member);
setTimeout(display,3000);





