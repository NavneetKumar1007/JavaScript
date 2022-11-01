//set always contain unique elemet
// sets are iterable 

const dishes=new Set(['Dosas','Idli','Noodles','Fried Rice','Chicken Curry','Dosas']);
console.log(dishes);

//itertaing the set using for of
for(let item of dishes ){
    console.log(item);
}

console.log(dishes.has('Dosas'));

console.log(dishes.has('prown'));

dishes.add('prawn');
console.log(dishes.has('prawn'));


dishes.delete('Idli');
console.log(dishes);
