// --------------------------------
// -----------Switch Case----------
// --------------------------------

var ename, age, job;

ename = prompt("Enter Your Name ");
job = prompt("Enter Your Job ");

switch(job.toLocaleLowerCase()){ /* covert to lowercase(simple latters) */

    case "teacher":
        console.log(ename+" is a " + job);
        break;
    case "docter":
    case "manager":
    case "programmer":
        console.log(ename+" is a " + job);
        break;
    case "engineer":
        console.log(ename+" is a " + job);
        break;
    case "singer":
        console.log(ename+" is a " + job);
        break;
    default:
        console.log(ename+" is a noone ");
        break; 
}

//********************************** */


age = prompt("Enter Your Age ");

switch(true){
    case age < 20:
        console.log(ename + ' is under age.');
        break;
    case age >= 20 && age < 30:
        console.log(ename + ' is in perfect age.');
        break;
    case age >= 30 && age < 50:
        console.log(ename + ' is mature.');
        break;
    default:
        console.log(ename + ' is too old.');
}
