// 0, null, undefined, '' and  NaN are falsy values except these 5 are truthy values.
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(NaN));

//Truthy Value
console.log(Boolean(' '));
console.log(Boolean(new Date()));