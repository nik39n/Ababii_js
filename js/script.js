let number = 3;
function numberExtend(number, extend){
    if(extend == 1){
        return number;
    } else {
        return number* numberExtend(number, extend-1);
    }
}

console.log(numberExtend(number,5));