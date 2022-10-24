//for structured data Array is preferred
//for unstructured data objects are preferred

const description=[
    'Nishu',
    23,
    '1999',
    'teacher',
    ['shivani','shivi']
];
console.log(description);
console.log(description[4]);

const desc={
    name:'Navneet',
    age:23,
    birthYear:'1999',
    profession:'teacher',
    friends:['Nishu','Snehil']
}
console.log(desc.friends[0]);

console.log(desc['name']);
console.log(desc['friends'][0]);
console.log(desc);
desc.hobbies=['Riding','Loving','learning'];
console.log(desc.hobbies);
