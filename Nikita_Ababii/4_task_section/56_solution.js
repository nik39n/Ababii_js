// 5.6. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и
// возвращает сумму его цифр.
function getDigitSum(number){
    let temp = 0;
    let string = number.toString();
    for(let i = 0;i<string.length;i++){
        temp += Number(String(number)[i]);
    }
    return temp;
}
console.log(getDigitSum( 123 ));