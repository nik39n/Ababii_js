function InvDigits(k){
    let fiveNumber =  k%10;
    let fourthNumber = Math.floor(k%100/10);
    let thirdNumber = Math.floor(k%1000/100);
    let secondNumber = Math.floor(k%10000/1000);
    let firstNumber = Math.floor(k/10000);
    return k = String(fiveNumber) + String(fourthNumber) + String(thirdNumber) + String(secondNumber) + String(firstNumber);
}
let number = +prompt("Ведите 5 значное число");
console.log(InvDigits(number));