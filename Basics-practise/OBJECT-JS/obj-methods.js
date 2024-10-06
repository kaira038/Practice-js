//Javascript object method


// 1. assign ()

// 1.1 creat target object

const person1= {
    firstName:"siva",
    lastName:"prakash",
    isHeSibling:true,
    job:"software testing",
};

// 1.2 create sourse object

const person2={ 
    firstName:"kavi",
    lastName:"priya",
    isHeSibling:false
};


//1.3 assign sourse to target

const test=Object.assign(person1,person2);

// //display
// const test1=Object.entries(person1);

// console.log(test1);

//  2. entries()
// It returns array of key/value pairs

const method2Sam=Object.entries(person1);

console.log(method2Sam);

// 2.1 easy in loops

const myObj={tomato:300,potato:200,onion:400};

let text="";

for(let[veg,value] of Object.entries(myObj)){
    text+= veg+":"+value +" ";
}

console.log(text);


//simple to convert object to map


const fruits={bananas:300,apple:200,grape:450};

const myMap=new Map(Object.entries(fruits));

console.log(myMap);


// 3.  fromEntries() -return  key/value pair object

const baries=[
    ["cranberry",45],
    ["blackberry",75],
    ["stawberry",55],
    ["blueberry",95]
]

console.log(typeof baries);  //object

const val=Object.fromEntries(baries);

console.log(val);



// 4. values()
//Object.values() is similar to Object.entries(), but returns a single dimension array of the object values

const person3={
    name:"sakthi",
    age:45,
    isMarried:true
};

const tet=Object.values(person3);

console.log(tet);  //['sakthi', 45, true]- 1 dimention



//5. object.groupBy()

// groups elements of an object according to string values returned from a callback function.
//does not change the org val

const vegies=[
    {veg:"tomato",quantity:300},
    {veg:"potato",quantity:250},
    {veg:"onion",quantity:450},
];

//callback fn

function myCallback({quantity}){
    return quantity > 300 ? "ok": "low";
}


//group  by quantity

let tet2= Object.groupBy(vegies,myCallback);

console.log(tet2);//{low: Array(2), ok: Array(1)}


// 6. object.keys()

//return array of keys of object

const tet3=Object.keys(vegies);
const tet4= Object.keys(person3);

console.log(tet3);
console.log(tet4);


// 7. for ... in loop

//loop through properties of on object


const myloop={
    name:"kavipriya",
    qualification:"BCA",    
};

let tet5="";

for(let x in myloop){
    tet5+= myloop[x]+" ";
}

console.log(tet5);

//execute block of code inside the object once the alla properties













