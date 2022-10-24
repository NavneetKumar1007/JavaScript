const bonus=80000;
const employeeDetails={
    name:'Navneet Kumar',
    age:23,
    birthYear:'1999',
    profession:'Engineer',
    friends:['Nishant','Kunal'],
    intialSalary:175000
}
const calculateSalary=function(intialSalary)
{
    return intialSalary*0.8+bonus;
}
console.log(calculateSalary(175000));


//Method 2

const bonus1=80000;
const employeeDetails1={
    name1:'Navneet Kumar',
    age1:23,
    birthYear1:'1999',
    profession1:'Engineer',
    friends1:['Nishant','Kunal'],
    intialSalary1:175000,
    calculateSalary:function()
    {
    return this.intialSalary1*0.8+bonus1;
    }
}

console.log(employeeDetails1.calculateSalary());

//Method 3

const bonus2=80000;
const employeeDetails2={
    name2:'Navneet Kumar',
    age2:23,
    birthYear2:'1999',
    profession2:'Engineer',
    friends2:['Nishant','Kunal'],
    intialSalary2:175000,
    calculateSalary:function()
    {
    this.actualSalary1=this.intialSalary2*0.8+bonus2;
    }
}

employeeDetails2.calculateSalary();-
console.log(employeeDetails2.actualSalary1);

