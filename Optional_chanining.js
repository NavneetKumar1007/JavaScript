const description={
    firstName:'Navneet',
    lastName:'Kumar',
    friends:['Ankush','Ankur'],
    birthYear:1999,
    features:{
        height:'5.8',
        weight:'70'
    },
    calcAge(){
        return 2022-this.birthYear;
    }
}
// optional chanining along with nullish coaleshing 
console.log(description.features?.height ?? 'Features Not valid');
console.log(description.features?.money ?? 'Features Not valid');
console.log(description.calcAge?.()||"Method not appropriate");