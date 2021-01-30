// 2.8. В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года
// попадает этот месяц (зима, лето, весна, осень).
let month = 4;
if(month===1 || month===2 || month===12){
    console.log(" Зима ");
} else if (month===3 || month===4 || month===5){
    console.log(" Весна ");
} else if (month===6 || month===7 || month===8){
    console.log(" Лето  ");
} else if (month===9 || month===10 || month===11){
    console.log(" ОСень  ");
}
