const description=[
    'Animesh Singh',
    23,
    '1999',
    'Engineer',
    'Uttarpradesh',
    ['Ankush','Ayush','Shubham']
]

for(let idx=0;idx<description.length;idx++)
{
    console.log(description[idx]);
}

const type=[];
for(let i=0;i<description.length;i++)
{
    type.push(typeof description[i]);
}
//console.log(type);

for(let i=0;i<description.length;i++){
    if(type[i]=='number')
    {
        continue;
    }
    console.log(description[i]);
}


//while loop
let i=0;
while(i<description.length)
{
    console.log("Inside While");
    i++;
}