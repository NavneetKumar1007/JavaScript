//Shallow  Copy of existing array
const arr=[1,2,3,4,5];
const newArr=[...arr];
console.log(newArr);

const newArr1=[0,...newArr,6,7];
console.log(newArr1);
//spread operators on objects
const decriptions={
    lastName:'Kumar',
    firstName:'Navneet',
    birthYear:1999,
}

const descriptionModified={
    friends:['Nishant','Ankur'],
    ...decriptions,
}
console.log(descriptionModified);


//Spread operator on strings we can separater all charater of string
const nameOfPerson='Annirudha';
const nameArray=[...nameOfPerson];
console.log(nameArray);



