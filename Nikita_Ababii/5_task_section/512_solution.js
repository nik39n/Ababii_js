// 5.12. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его по убыванию.
let array = [3,4,1,2,7];
console.log(array.sort(function(a,b){
    return b-a;
}));
