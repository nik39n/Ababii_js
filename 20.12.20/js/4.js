let number = +prompt(" Ведите 1-е число ");
let secondNumber = +prompt(" Ведите 2-е число ");
let divide = 1;
let theBiggest = 0;
if (number>secondNumber){
    theBiggest = number;
} else{
    theBiggest = secondNumber;
}
while(divide!==theBiggest){
    if (number%divide===0 && secondNumber%divide===0 ){
        console.log(divide);
    }
    divide++;
}