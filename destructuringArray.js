const names=['Aniruddha','Ankush','Animesh','Navneet'];
console.log(names[0],names[2]);

// Using Destructuring
const [nameIndexZero, , ,nameIndexOne]=names;
console.log(nameIndexOne,nameIndexOne);

const arr=[1,2,[3,4]];
const [i, ,j]=arr;
console.log(i,j);

const  [l, ,[m,n]]=arr;
console.log(l,m,n);

let [o, ,p]=arr;
[p,o]=[o,p];
console.log(o,p);


// 
