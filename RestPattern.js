 // Rest operator packs all the elements of arrays and objects

 const arrZero=[0,1,2,3,4];
 const arrOne=[5,6,7,8,9];
 //Spread operator
 console.log([...arrZero,...arrOne]);

 //Rest operator
 //const[first,second,...rest]=[...arrZero,...arrOne];
 //console.log(first,second,rest);

 //Rest pattern in objects

 const description={
    name:'Navneet',
    birthYear:1999,
    firends:['Nishant','Kunal_Amazon'], 
 }

 const {
    name,
    ...rest
 }=description;
console.log(name,rest)

