function factorial(number){
    let result = 1;
    while(number){
        result *= number--;
        console.log(result);
    }
    alert(result);
}
let number = +prompt(" Введите число ");
factorial(number);

