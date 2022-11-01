const dishes=['Prawan Fry','Sushi','Noodles','Fried Rice','Dosa'];
for(let item of dishes)
{
    console.log(item);
}

for(let items of dishes.entries())
{
    console.log(items);
}

for(let [idx,product] of dishes.entries())
{
    console.log(product);
}

for(let prod of [...dishes.entries()])
{

    console.log(prod[0],prod[1]);
}