let min = +prompt(" Минимальное значение для диапазона ");
let max = +prompt(" Максимальное значение для диапазона ");
function isRange (min, max){
    let i = 0;
    let result = 0;
    while ((i<min)&&(min<max)){
        if (min%i === 0){
            result+=i;
            console.log(i);
        }  
        i++;
        min++;
    }
    if (result===min){
        alert(true);
    } else {
        alert(false);
    }
}
console.log(isRange(min,max));