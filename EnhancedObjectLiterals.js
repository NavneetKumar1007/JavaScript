//This was introduced in ES6

const features={
    height:'5.8',
    weight:'70'
}
const description={
    firstName:'Navneet',
    lastName: 'Kumar',
    birthYear:'1999',
    friendsOfNav:['Nishant','Kunal'],
    features:features,
    calcAge:function(){
        return 2022-this.birthYear;
    }
}
console.log(description.calcAge());

