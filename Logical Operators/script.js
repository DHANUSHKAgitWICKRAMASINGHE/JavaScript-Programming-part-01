// --------------------------------
// --------Logical Operators-------
// --------------------------------


var a = 10;
var b = 10;
var c = 5;

a= prompt("Enter number for 'a'");
b= prompt("Enter number for 'b'");
c= prompt("Enter number for 'c'");

// And
if (a==b && a==10) {

    a<50 ? console.log("It is small Number") /* If part */ : console.log("It is big Number") /* else part */;
    
}
// Or
else if (a==b || a<50){

    a<50 ? console.log("It is small Number") /* If part */ : console.log("It is big Number") /* else part */;

}

//not 
else if (a != c){

    a<50 ? console.log("It is small Number") /* If part */ : console.log("It is big Number") /* else part */;

}

else{
    console.log("**********");
}