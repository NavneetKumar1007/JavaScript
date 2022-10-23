var myName="Navneet Kumar";
{
    var myName="Animesh"
    console.log(myName);
}
console.log(myName);

//Any variable declared with var is function scoped or globle scoped. it is not block scoped.

var myName1="Nishant Shanu";
function myFunction(){
    var myName1="Navneet Kumar";
    console.log(myName1);
}
myFunction();
console.log(myName1);


//Redeclaration and updation, there will be no error using a var keyword.
var myName2="Nishant shanu";
var myName2="Navneet Kumar";
console.log(myName2);

var myName3="Nishu";
myName3="shanu";
console.log(myName3);

console.log(myName4);
var myName4="SDE Amamzon";
console.log(myName4);


