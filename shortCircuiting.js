//Will check from left to Right and if it finds truthy values. it will consider that.
//ShortCircuiting of Or
console.log(NaN||NaN||undefined||'Navneet');
console.log(' '||'Kumar');

//Will check from left to Right and first falsy value is being logged
//Short Circuiting of And

console.log(3&&'Navneet'&&undefined&&'Kumar');  