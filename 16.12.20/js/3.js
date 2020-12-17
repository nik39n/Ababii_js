let number = +prompt("Введите 3-значное число");
if (isNaN(age)){
    throw "Ошибка ввода";
}
let lastNumber = number % 10;
let firstNumber = number / 100;
let averageNumber = Math.floor(number / 10 % 10);
if (lastNumber===firstNumber || firstNumber===averageNumber || averageNumber===lastNumber){
    console.log('Тут есть одинаковые числа');
} else{
    console.log("Nen нет уодинаковых чисел");
}