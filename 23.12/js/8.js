function secondConverter(hours,minutes,seconds){
    let result = hours*3600 + minutes*60+seconds+' Секунд '
    return result;
}
let hours = +prompt('Часы');
let minutes = +prompt('Минуты');
let seconds = +prompt('Секунды');

console.log(secondConverter(hours,minutes,seconds));
