// 5.23 Сделайте функцию isInArray, которая определяет, есть ли в массиве элемент с заданой подстрокой
// или нет. Функция первым параметром должна принимать текст, а вторым - массив, в котором делается
// поиск. Функция должна возвращать true или false.
let array = [1,67,8,4,87,34];
let text = 34;
function isInArray (text,array){
    for(let i = 0;i<array.length;i++){
        if (array[i]===text){
            console.log(true);
            break;
        }
    }
}
isInArray(text,array);