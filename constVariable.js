const myName="Navneet Kumar";
//block scope  --> scope variable will remain inside block scope only it wont be global like var and let
{   
    const myName="Navneetu";
    console.log(myName);
}
console.log(myName);

//updation and Redeclaration, So in case of constant redeclaration is not allowed neither updation is allowed.
const myName1="Navneet ";
//myName1="kumar";
console.log(myName1);

//Hosting--> we cannt decalare variable without iitilizing it
const myName2="Navneet";
console.log(myName2);



//Operators Precendence Value : refer MDN Web Docs for JS. () >> . >> [] >> logical opertaor >> mult >> div >> add and sub 
 
