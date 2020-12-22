let comited = +prompt( " Совершенное число " );
function comittedCount(comited){
    let i = 0;
    let result = 0;
    while (i<comited){
        if (comited%i === 0){
            result+=i;
            console.log(i);
        }  
        i++;
    }
    if (result===comited){
        alert(true);
    } else {
        alert(false);
    }
}
console.log(comittedCount(comited));

