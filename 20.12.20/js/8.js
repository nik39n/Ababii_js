let integral = +prompt( " Число которому будет кратно выводиться "  );
for(let i=0;i<=100;i++){
    if (i%integral===0){
        console.log(i);
    }
}