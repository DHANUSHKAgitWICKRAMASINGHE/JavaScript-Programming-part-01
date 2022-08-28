// --------------------------------
// ---------BMI Comparison---------
// --------------------------------

/*
I and Nipun are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
BMI = mass / height ^ 2
(Mass is kg and Height in meter)
1. Store my and Nipun's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether I have a higher BMI than Nipun.
4. Print a string to in alert box containing the variable from step 3.
*/

// create variables

var iMass, iHeight,nMass, nHeight, bmiI, bmiN,isMy;

//get my details
iMass = prompt("My Mass is (kilogram);");
iHeight = prompt("My Height is (meeters) ;");
bmiI = iMass / (iHeight**2);

//get Nipun details
nMass = prompt("Nipun's Mass is (kilogram);");
nHeight = prompt("Nipun's Height is (meeters) ;");
bmiN = nMass / (nHeight**2);

//console.log(bmiI+" "+ bmiN);


// Boolean
isMy = (bmiI > bmiN);

alert(isMy);