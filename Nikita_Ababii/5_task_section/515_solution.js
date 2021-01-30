// 5.15. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым
// параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов
// должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
let array = [];
function arrayFill(element,count){
    for (let i = 0;i<count;i++){
        array[i] = element;
    }
    console.log(array);
}
arrayFill('x',50);