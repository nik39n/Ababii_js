// 4.4 Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на
// русском языке.
let num = 2;
function weeks(number){
    switch(number){
        case 1:console.log(" Понедельник ");
        break;
        case 2:console.log(" Вторник ");
        break;

        case 3:console.log(" Среда ");
        break;

        case 4:console.log(" Четверг ");
        break;

        case 5:console.log(" Пятница ");
        break;

        case 6:console.log(" Суббота ");
        break;

        case 7:console.log(" Воскресенье ");
        break;


    }
}
weeks(num);