//Type Conversion

console.log(typeof(new Date()));
console.log(typeof 'Navneet');
console.log(typeof 23);

//Type conversion of 23 string to number 23.
console.log(typeof Number('23'));
console.log(typeof String(23));

//Type coersion if data type is same then it remains same else it type converts

console.log(typeof +('23'));

//js converts string '23'  to no because of + this is coersion.

console.log('1993'+31);
console.log('1993'-31);
console.log('1993'*10);
console.log('1993'/10);
console.log('1993'/'10');

console.log('23'>10); //String got converted to number and then number is compared to it.
console.log(23=='23'); //true
console.log(23==='23'); //strict equality is false




