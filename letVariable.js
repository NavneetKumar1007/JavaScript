//Behavior of variable declared with var is similar to that of variable declared with let. In the case where function scope is considered.
let myName="Navneet";
{
    let myName="Navneet";
    console.log(myName);
}
console.log(myName);

//Redeclaration assignment [updation is allowed but redeclaration is not allowed in let]
let myName1="Navneet Kumar";
myName1="Amazon SDE wala Navneet";
console.log(myName1);

//Different scope redeclaration is allowed
let myName2="SDE";
{
    let myName2="Amazon SDE";
}
console.log(myName2);


//Hosting
//In case of var undefined is assigned but in case of let no assignement is done and we will get error.
let myName4;
console.log(myName4);
myName4="Developer Navneet";
