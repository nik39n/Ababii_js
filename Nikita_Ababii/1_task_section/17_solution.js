// 1.7. Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение)
// цифр этого числа.
let num = 12345;
let firstNumber=Math.floor (num / 10000 % 10);
let secondNumber=Math.floor (num /1000 % 10);
let thirdNumber=Math.floor (num / 100 % 10);
let fourhNumber=Math.floor (num / 10 % 10);
let fifthNumber=num % 10;
console.log(fifthNumber * fourhNumber * thirdNumber * secondNumber * firstNumber);

