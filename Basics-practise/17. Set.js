// JavaScript Sets


//// You can create a JavaScript Set by:

// Passing an array to new Set()
// Create an empty set and use add() to add values




//sample 1:- Create a Set and add values

const letters=new Set(["a","b","c","d"]);

letters.add("e");

console.log(letters);
console.log(typeof letters);  //object

// check whether it is array
console.log(Array.isArray(letters));   //false
console.log(letters instanceof Array);  //false



//sample 2:- Create a Set and add variables


//create empty set

const sampleSet=new Set();

// create variable
const a="m";
const b="n";
const c="o";
const d="p";

//add varible name to set get value of var as a result 
sampleSet.add(a);
sampleSet.add(b);
sampleSet.add(c);
sampleSet.add(d);


// console.log(sampleSet);  //Set(4) {'m', 'n', 'o', 'p'}----> o/p


// NOTE :If you add equal elements, only the first will be saved

// suppose

sampleSet.add("q");
sampleSet.add("r"); // 1st will be saved
sampleSet.add("r"); // omitted
sampleSet.add("r"); // omitted
sampleSet.add("s");


console.log(sampleSet);
console.log(sampleSet.size); //7 ----> m,n,o,p,q,r,s



/// JavaScript Set Methods

// add() Method
// has() Method
// forEach() Method
// values() Method
// keys() Method
// entries() Method


const alphat=new Set(["a","b","c","d"]);

// 1. add()
alphat.add("e");

// 2. has()--- returns true if a specified value exists in a set.
const hasMethodSample= alphat.has("b");

// 3. forEach() ---invokes a function for each Set element.

const sampleForEach=(["a","b","c"]);

let txt8="";

sampleForEach.forEach(function(value){
    txt8 += value;
})

// 4. values() ---  returns an Iterator object with the values in a Set

let txt9="";
const myIterator=alphat.values();

for(let entry of myIterator){
    txt9+=entry;
}

// console.log(txt9);


          //another way

let txt10="";

for(let entries of alphat.values()){
    txt10+=entries;
}

// console.log(txt10);


// 5. keys() --- returns an Iterator object with the values in a Set

//Set has no keys, so keys() returns the same as values()

const myIterator2 =alphat.keys();

alphat.add("z");
let txt11="";

for(let enty of myIterator2){
    txt11+=enty;
}

   //another way

let txt12="";

for(const sampleKeyMethod of alphat.keys()){
    txt12 += sampleKeyMethod;
}



// 6. entries() ---returns an Iterator with [value,value] pairs from a Set.

//entries() method is supposed to return a [key,value] pair from an object
//here, there is no keys

const mySampleset= new Set(["p","q","r"]);

let txt13="";

for(const sampleEntryMethod of mySampleset.entries()){
    txt13 += sampleEntryMethod;
}





console.log(alphat);
console.log(sampleForEach);
console.log(hasMethodSample);  // true

console.log(txt9); //a,b,c,d,e  
console.log(txt10);  //a,b,c,d,e

console.log(txt11); //a,b,c,d,e,z
console.log(txt12); //a,b,c,d,e,z

console.log(txt13);





