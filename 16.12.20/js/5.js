let fivethNumbers = +prompt("Введите пятиразрядное число");
if (isNaN(fivethNumbers)){
    throw "Ошибка ввода";
}
let fiveNumber =  fivethNumbers%10;
let fourthNumber = Math.floor(fivethNumbers%100/10);
let thirdNumber = Math.floor(fivethNumbers%1000/100);
let secondNumber = Math.floor(fivethNumbers%10000/1000);
let firstNumber = Math.floor(fivethNumbers/10000);
console.log(fiveNumber);
console.log(fourthNumber);
console.log(thirdNumber);
console.log(secondNumber);
console.log(firstNumber);
if( (fiveNumber===firstNumber )
&& (fourthNumber===secondNumber))
{
 console.log("палиграф");
}
