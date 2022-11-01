const description={
    firstName:'Navneet',
    lastName:'Kumar',
    friends:['ankush','Annirudh'],
    features:{
        height:'5.9',
        weight:'70'
    }
}
const keys=(Object.keys(description));
const values=(Object.values(description));
const items=Object.entries(description);
console.log(items);

for(let item of items)
{
    console.log(item);
}

for(let [key,value] of items)
{
    console.log(key,value);
}
