// --------------------------------
// ------Arithmetic Operators------
// --------------------------------

// --Single Operators--
var myAge, yourAge, year, result;
myAge = 26
yourAge = prompt("How old Are you?");
year= prompt("Current year ?");

// Substraction
result = year - myAge;
console.log('Birth Year is '+result);

// Addition
result = (year + 10);
console.log('After 10 years, It will be '+result);

// Multiplication
result = myAge * yourAge;
console.log('Product of our ages '+result);

// Division
console.log('Division of our ages '+(myAge/yourAge));


// Modulus
console.log('Modulus of our ages '+(myAge%yourAge));

// Exponentiation
console.log('Exponent of my age '+(myAge**4));

// Increment

console.log(myAge++); // post Increment
console.log('Post Increment of my age '+myAge);

console.log(++myAge); //pre Increment
console.log('Pre Increment of my age '+myAge);

// Decrement
console.log(myAge--); //post Decrement
console.log('Post Decrement of my age '+myAge);

console.log(--myAge); // pre Decrement
console.log('Pre Decrement of my age '+myAge);


// --Operator Precedence--
var cal = (20+30)/10+4.5-2*4**2;
// 1-->      ( )
// 2-->       **
// 3-->       /
// 4-->       * 
// 5-->       +
// 6-->       -
console.log("Operator Precedence = "+cal);

// --Multiple Operators--
var ans1, ans2;
ans1 = ans2 = (((30+40-29)*2)/8)**4; // Assignment operator | right to left
console.log(ans1+' | '+ans2);

// --Operator Precedence table web page link --
//  https://lia.disi.unibo.it/materiale/JS/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence.html