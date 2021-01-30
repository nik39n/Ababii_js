// С помощью двух вложенных циклов нарисуйте следующую пирамидку:
let str = "";
for (let i = 1; i <= 9; i++){
    str += "\n";
    for (let j = 1; j <= i; j++){
        str += i;
    }
}
console.log(str);