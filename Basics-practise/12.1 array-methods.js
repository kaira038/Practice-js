//BASIC ARRAY METHOD

// 1. length
const fruits = ["Banana", "Orange", "Apple", "Mango","jackfruit"];
let size = fruits.length;

console.log(fruits);
console.log(size); //5

// 2. toString()
console.log(fruits.toString()); //return as string

// 3. at()
console.log(fruits.at(2));  //Apple
                            // at() method returns the same as [].


// 4. join()

// like toString(), but in addition you can specify the separator
 console.log(fruits.join("*"));
 console.log(fruits.join("/"));
 console.log(fruits.join(","));
 console.log(fruits.join("@"));



 // 5. Popping and Pushing
 //easy to remove elements and add new elements.

 //5.1 pop() -removes the last element

 console.log(fruits.pop());
 console.log(fruits.pop(2));

 console.log(fruits);

 // 5.2 push() -adds a new element to an array (at the end)

 console.log(fruits.push("pinapple"));
 console.log(fruits.push("plum","berry"));
 console.log(fruits);  

 // [ "Banana", "Orange", "Apple", "pinapple", "plum", "berry" ] - current array
 


 //SOME MORE METHODS FOR ARRAY

 // 6. shift() - removes the first array element

 console.log(fruits.shift());
 console.log(fruits.shift(1));  //shift() method returns the value that was "shifted out"
 console.log(fruits.shift(4));

 console.log(fruits);
//  [ "pinapple", "plum", "berry" ]


// 7. unshift() - adds a new element to an array (at the beginning)

console.log(fruits.unshift("plums"));
console.log(fruits.unshift("graps","orange"));

console.log(fruits);

// 8. Merging Arrays - concat()

//Concatenating arrays means joining arrays end-to-end
//concat() method creates a new array by merging (concatenating) existing arrays

const bankruptcyGirls= ["kavipriya","jennifer","laxmi","niktha"];
const bankruptcyBoys= ["Ajay","vikrum","yuvasri"];

const bankruptcyTeam=bankruptcyGirls.concat(bankruptcyBoys);

console.log(bankruptcyTeam);
console.log(bankruptcyBoys);

//Merging three array

const bankruptcyLeads=["balaji","seetharaman","prabha"];
const bankruptcy=bankruptcyGirls.concat(bankruptcyBoys,bankruptcyLeads);

console.log(bankruptcy);



