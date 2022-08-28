// --------------------------------
// ---------Variables--------------
// --------------------------------

// --Primitive Data Types--
/* Number       -     Floating point numbers, for decimals and integers
   String       -     Sequence of characters, used for text
   Boolean      -     Logical data type that can only be true or false
   Undefined    -     Data type of a variable that does not have a value yet
   Null         -     Non-existent */

// ****** You only can start a varible name with a letter, underscore or dollar sign.
// ****** And can't use any reserved keywords as variable names

// Create variables
var firstName = "Dhanushka"
var lastName = "Wickramasinghe"
var age = 26;
var trueFalse = true;
var a;
var job, height; // variable declaration

//print only variable
console.log(firstName);
//print variable with string (concatanate)
console.log("My name is "+firstName+" "+lastName);
// Type Coercion
//(when we print number type variable, number type variable value convert to srting and print it)
console.log("My age is "+ age); // output is strings 
// boolean + string ---> string
console.log("It is "+trueFalse); // output is strings 
//Undefined variabale print
console.log('I am a '+a);


// Get variable type
console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(age));
console.log(typeof(trueFalse));
console.log(typeof(job));
console.log(typeof(height));

// Define variable
job = "Programmer";
// Variable Mutation
lastName = 'IInd Wickramasinghe';
console.log('I am '+lastName+' I am a '+job);

// Dsiplay an alert
alert("I am "+firstName+". My age is "+age+". And Last name is "+lastName+". My job is a "+job+". It is "+trueFalse+" and I am good.");

// Get user input
height = prompt("What is your Height?");
alert("Your height is "+height+" feet.");
//2nd type
height = prompt("What is your Height?");
alert(`Your height is ${height} fet.`);




