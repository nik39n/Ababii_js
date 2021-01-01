function InvDigits(k){
    let fiveNumber =  fivethNumbers%10;
    let fourthNumber = Math.floor(fivethNumbers%100/10);
    let thirdNumber = Math.floor(fivethNumbers%1000/100);
    let secondNumber = Math.floor(fivethNumbers%10000/1000);
    let firstNumber = Math.floor(fivethNumbers/10000);
    return k = fiveNumber + fourthNumber + thirdNumber + secondNumber + firstNumber;
}