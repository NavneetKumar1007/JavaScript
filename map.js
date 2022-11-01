// Every element are stored in key value pair
// iterable
// In object we have used keys as only string but in case of Map we can use keys as object, strings, numbers and many others.


const demoMap=new Map();
demoMap.set('name','Navneet');
console.log(demoMap);
demoMap.set(1,'Amazon');
console.log(demoMap);
const friends=['anish','Nishant'];
demoMap.set(friends,'friends');
console.log(demoMap);


// can use any kind of variable as string
console.log(demoMap.get(friends));



const demoMap1=new Map([
    ['name','Navneet'],
    ['22','Age'],
    ['birthYear',1999],
    [['Anish','Nishant'],'frineds']
]);
console.log(demoMap1);
//Iterate using destructuring the map.
for(let [key,value] of demoMap1)
{
    console.log(key,value);

}

