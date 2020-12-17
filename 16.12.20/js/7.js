let total = +prompt("Введите сумму покупки");
if (isNaN(total)){
    throw "Ошибка числа";

}
if (200<=total<=300){
    let sale=3;
}
if (300<total<500){
    sale = 5;
}
if (total>500){
    sale = 7;
}
console.log('Сумма к оплате со скидкой '+(total-(total*sale/100)));