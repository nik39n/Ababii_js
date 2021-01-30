// 5.14. Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий
// '333' и так далее до 32.
let array = [];
let k = 1;
let temp = '';
for (let i = 1;i<=32;i++){
    for(let j = 0;j<i;j++){
        temp += String(i);
    }
    array.push(temp);
    temp = "";
}
console.log(array);
