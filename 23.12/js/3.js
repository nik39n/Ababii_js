function concat(firstNumber, secondNumber, thirdNumber){
    return String(firstNumber)+String(secondNumber)+String(thirdNumber);

}
let firstNumber = +prompt(" первое число ");
let secondNumber= +prompt(" второе число ");
let thirdNumber = +prompt(" третье число ");
console.log(concat(firstNumber,secondNumber,thirdNumber));