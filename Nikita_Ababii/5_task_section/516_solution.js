// 5.16. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
let array = [1,2,3,4,5,6];
let count = array.length;
for (let i = 1 ; i<array.length;i++){
    array.unshift(array[i]);
    i++;
}
for (let i = count+2 ; i>=0;i--){
    array.pop(array[i]);
    i--;
}
console.log(array);
