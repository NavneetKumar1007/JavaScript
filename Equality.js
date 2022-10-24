//Loose equality opertaor ==
//Strict equality operators ===

if('23'==23){
    console.log('They are equal');
}
if('23'===23){
    console.log('They are equal');
}


const character=" ";
switch(character){
    case 'A':
    case 'B':
        console.log('Selected A or B');
        break;
    case 'C':
        console.log('Selected C')
        break;
    default:
        console.log('Except A B C');
}    


//Terniry operator

const isValidId=true;
if(isValidId){
    console.log("I am an employee");
}
else
{
    console.log("I am an invalid employee");
}

(isValidId)?console.log("Valid Employee"):console.log("Invalid Employee");