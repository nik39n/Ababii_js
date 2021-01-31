// 5.22 Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите
// true, а если нет - выведите false. Оформите код в виде функции.
let array = [1,2,3,3,5];
let previous  = array[0];
temp = 0;
function connectTwo(array){
    for (let i = 1;i<array.length;i++){
        if(array[i] ===  previous){
            temp = true;
            break;
        } else {
            temp = false;
        }
        previous = array[i];
    }   
    if (temp === true){
        return true;
    } else {
        return false;
    }
}
console.log(connectTwo(array));
