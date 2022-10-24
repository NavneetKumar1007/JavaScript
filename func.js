function description(firstName,lastName)
{
    console.log(`I am ${firstName} ${lastName}.`);

}
description('Nishant','shanu');
description('Ravi','kishan');
description();
description();

//func dec func expression { mostly preferred }
//function declaration

function functionOne()
{
    console.log('Hi I am finc 1');
}
functionOne();


//case 2 func declaration
functionOne();
function functionOne()
{
    console.log('Hi I am finc 1');
}

//func expression
const functionTwo=function(){
    console.log("I am func 2");
}
functionTwo();

//case 2.. Error in function expression   ie hosting is not considered wrt function expression but it is considered wrt to function decleration.
//functionTwo1();
const functionTwo1=function(){
    console.log("I am func 2");
}

//Arrow function in Js to much popular in web development
const functionArrow=()=>{
    console.log('Hi Guys');
}
functionArrow();

//Return in Arrow func
const functionArrow1=()=> 'Hi Guys'
console.log(functionArrow1());


//parameter in Arrow func
const functionArrow2=(firstName1)=>`Hi ${firstName1} here!`
console.log(functionArrow2('Navneet'));

const functionArrow3=(firstName3)=>{
    const welcomeTxt=`Hi ${firstName3} here.`
    return welcomeTxt;
}
console.log(functionArrow3('Nishant'));


//call function from other function
const modifier=function(bass){
    return bass*1.5;
}
const regulation=function(shrill){
    return shrill+10;
}
const soundClarity=function(shrill,bass){
    const modifiedShrill=regulation(shrill);
    const modifiedBass=modifier(bass);
    return {shrill:modifiedShrill,bass:modifiedBass};
}
console.log(soundClarity(79,105));



