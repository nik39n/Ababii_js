// 5.2. Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов
// этого массива.
let array = [2,3,4,5];
let temp = 1;
for(let i=0;i<array.length;i++){
    temp *= array[i]; 

}
console.log(temp);
