// A Map holds key-value pairs where the keys can be any datatype.

// 1. create Map()

const fruits=new Map([["apple",300],["banana",100],["pinapple",150]]);

// 2. can add elements to a Map with the set() method

fruits.set("oranges", 200);


// 3. set() method can also be used to change existing Map values

fruits.set("apple",100);


console.log(fruits);

// 4 . get() Method --- gets the value of a key in a Map.

const getFryuitVal=fruits.get("apple");

console.log(getFryuitVal); //100

//Maps are Objects

console.log(typeof fruits); //object
console.log(fruits instanceof Map);  //true


// 5. Map.size

let getSizeValue= fruits.size;

console.log(getSizeValue);   //4


// 6. delete() - removes a map element


let removeElement=fruits.delete("apple");

console.log(fruits);    //{'banana' => 100, 'pinapple' => 150, 'oranges' => 200}



// 7. Map.has() - returns true if a key exists in a map

let isBananaAvailable= fruits.has("banana");

console.log(isBananaAvailable);  //true




// 8 .clear() - removes all the elements from a map

// fruits.clear();

// console.log(fruits); //size :0



// 9. Map.forEach() -method invokes a callback for each key/value pair in a map

let text= "";

fruits.forEach (function(value, key){
  text+=  key+"="+ value+ "<br>";
})
  
document.getElementById("demo1").innerHTML=text;


// 10. Map.entries() - returns an iterator object with the [key,values] in a map

// let text2="";

// for (const x of fruits.entries()){
//     text2+= x;
// }

// console.log(text2);


let text3 = "";
for (const x of fruits.entries()) {
  text3 += x + "<br>";
}

document.getElementById("demo2").innerHTML = text3;



//11. keys() - method returns an iterator object with the keys in a map

let text4="";

for(let x of fruits.keys()){
    text4+= x +"<br>";
}

// console.log(text4);
document.getElementById("demo3").innerHTML=text4;


// 12. Map.values() - returns an iterator object with the values in a map


let text5="";

for(let x of fruits.values()){
    text5+= x+"<br>";
}

document.getElementById("demo4").innerHTML=text5;

//can use the values() method to sum the values in a map


let text6=0;

for(let x of fruits.values()){
    text6+= x;
}

document.getElementById("demo5").innerHTML=text6;  //450

/////*    1..Being able to use objects as keys is an important Map feature.


// step 1 : create object

const apple= {name:"Apple"};
const banana={name:"Banana"};
const pinapple={name:"Pinapple"};

// step 2 : create a map

const fruities= new Map();

// step 3 : Add the objects to the map

fruities.set(apple,300);
fruities.set(banana,200);
fruities.set(pinapple,100);

document.getElementById("demo6").innerHTML=fruities.get(apple);  //300

//Remember: The key is an object (apples) not a string

console.log(fruities.get("apple"));  //undefined -bcz its not a string



////    2.. Map.groupBy()


//groups elements of an object according to string values returned from a callback function
//does not change the original object.


// step 1: Create an Array
const vegies=[
    {name:"Tomato",quantity:100},
    {name:"Potato",quantity:200},
    {name:"Onian",quantity:150}
];

// step 2: Callback function to Group Elements

function mycallback({quantity}){
    return quantity<170 ? "ok": "greater";
}

// Group by Quantity

const result= Map.groupBy(vegies,mycallback);  //{'ok' => Array(2), 'greater' => Array(1)}

// Display Results

let txt1="From vegies, there few veg are less then $170:<br><br> ";
for(x of result.get("ok")){
    txt1+= x.name+" "+x.quantity+ " <br>";
}

let txt2=" High quality vegies are more then $170.00 , those are: <br> <br>";
for(x of result.get("greater")){
    txt2+=x.name+" "+x.quantity+ " <br>";
}



console.log(result);
document.getElementById("demo7").innerHTML=txt1;
document.getElementById("demo8").innerHTML=txt2;



