// 5.5. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно
// больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
function isNumberInRange(number){
    if(number>0 && number<10){
        return true;
    } else{
        return false;
    }
}
console.log(isNumberInRange(+prompt("Ведите число")));