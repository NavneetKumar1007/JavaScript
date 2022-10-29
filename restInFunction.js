function display(first,second,...rest){
    console.log(rest);
    let sum=0;
    for(let i=0;i<(rest.length);i++){
        sum+=rest[i];
    }
    console.log(sum);
}
display(1,2,3,4,5,56,7,5);