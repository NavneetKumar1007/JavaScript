console.log('I have 1 apple and 1 orange');
console.log('I have two apples and two oranges');
console.log('I have three apples and three oranges');
console.log('I have four apples and four oranges');
console.log('I have five apples and five oranges');


for(let apples=1,oranges=1;apples<6 && oranges<6; apples++,oranges++){
    if(apples==1 && oranges==1)
    {
        console.log(`I have only ${apples} apple and ${oranges} ornage`);
    }
    else
    {
        console.log(`I have ${apples} apples and ${oranges} oranges`);
    }
}