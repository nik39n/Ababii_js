// 5.7. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и
// проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
function isEven(number){
    if(number % 2 === 0 ){
        return true;

    } else{
        return false;
    }
}
console.log(isEven(+prompt("Ведите число")));