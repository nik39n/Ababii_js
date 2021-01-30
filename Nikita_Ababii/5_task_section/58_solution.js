// 5.8. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с
// элементами 12, 15, 20, 25, 59, 79.
let array = [12,15,20,25,59,79];
let sum = 0;
let count = 0;
for (let i = 0;i<array.length;i++){
    sum += array[i];
    count = i;
}
console.log(sum/(count+1));
