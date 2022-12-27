const description={
    firstName:'Navneet',
    lastName:'Kumar',
    friends:['Annirudha','Ankur','Lokesh'],
    birthYear:1999,
    features:{
        height:'5.8',
        weight:'69'
    }
}
//This is a nested object in Javascript
console.log("Navneet Good Morning");
// Destructure the oject
const {
    firstName:first,
    lastName:last,
    friends:friendsOfNavneet,
} = description;
console.log(first,last,friendsOfNavneet)

//Destructure the nested objects
const{
    features:{
        height:heightOfPerson,
        weight:weightOfPerson,
    }
}=description;
console.log(heightOfPerson,weightOfPerson);

//Mutation
let first1='Ankush';
let last1='kumar';
({
    first1,last1
}={
    first1:'Animesh',
    last1:'Singh',
})
console.log(first1,last1);



