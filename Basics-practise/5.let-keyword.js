//1 . SCOPES  
//BLOCK SCOPE
// Variables declared inside a { } block cannot be accessed from outside the block:

{
  let x = 2;
}
// x can NOT be used here



//GLOBAL SCOPE -VAR
// Variables declared with varinside a { } block can be accessed from outside the block:
{
  var x = 2;
}

// 2. CANNOT REDECLARE

// With let you can not do this:

// let y = 0;
// let y = 2;

// console.log(y);  //throws error


// Variables defined with var can be redeclared.

var p= 6;
var p=7;
var p=2;

console.log(p);

//3. REDECLARING VARIABLES

// SAMPLE--var
var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2


// SAMPLE-- let
let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10

