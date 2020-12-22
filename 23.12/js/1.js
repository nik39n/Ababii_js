function comparing(firstNumber,secondNumber){
    if(firstNumber<secondNumber){
        return -1;
    } else if (firstNumber>secondNumber){
        return 1;
    } else {
        return 0;
    }
};
let number1 = +prompt(" первое ");
let number2 = +prompt(" второе "); 
console.log(comparing(number1,number2));