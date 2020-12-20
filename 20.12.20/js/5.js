let number = +prompt(" Введите число ");
let result = 1;
while(number){
    result *= number--;
    console.log(result);
}
alert(result);