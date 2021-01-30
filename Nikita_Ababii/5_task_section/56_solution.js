// 5.6. Составьте массив дней недели. С помощью цикла for выведите все дни недели маленькими буквами, а
// выходные дни выведите большими буквами.
let array  = ['Пн','Вт','Ср','Чт','Пт','Cб','Вс'];
for (let i = 0;i<array.length;i++){
    if(array[i] === "Cб" || array[i] === "Вс"){
        console.log(array[i].toUpperCase());
    } else {
        console.log(array[i].toLowerCase());

    }
}
