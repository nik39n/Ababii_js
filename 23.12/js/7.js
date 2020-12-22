function corectTime(hours,minutes,seconds){ 
    if (minutes===0){
        minutes='00';
    }
    if (seconds===0){
        seconds='00';
    }
    if (hours<10){
        hours ='0'+hours;
    }
    if (minutes<10){
        minutes ='0'+minutes;
    }
    if (seconds<10){
        seconds ='0'+seconds;
    }
    alert(hours+":"+minutes+":"+seconds);
    console.log(hours+":"+minutes+":"+seconds);
}
let hours = +prompt('Часы');
let minutes = +prompt('Минуты');
let seconds = +prompt('Секунды');

console.log(corectTime(hours,minutes,seconds));