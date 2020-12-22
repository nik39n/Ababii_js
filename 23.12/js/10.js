function secondConverter(hours,minutes,seconds){
    let result = hours*3600 + minutes*60+seconds
    return result;
}
function counterHours(seconds){
    let hours = Math.floor(seconds/3600);
    seconds -=hours*3600; 
    let minutes = Math.floor(seconds/60);
    seconds -= minutes*60;
    return hours + " часов " +minutes+ " минут "  +
    seconds+" секунд  ";

}
function converter(firstDateSeconds,firstDateMinutes,firstDateHours,secondDateSeconds,secondsDateMinutes, secondsDateHours){
    let firstresult=secondConverter(firstDateHours,firstDateMinutes,firstDateSeconds);
    let secondresult=secondConverter(secondsDateHours,secondsDateMinutes,secondDateSeconds);
    let sum;
    if(firstresult>secondresult){
       sum=firstresult-secondresult
    }
    if(secondresult>firstresult){
        sum = secondresult-firstresult
    }
    let resultHours = counterHours(sum);
    return resultHours;
}
let firstDateSeconds =+prompt('секунды  первого дня');
let firstDateMinutes =+prompt('минуты первого дня');
let firstDateHours =+prompt('часы первого дня');
let secondDateSeconds =+prompt('секунды второго дня');
let secondsDateMinutes =+prompt('минуты второго дня');
let secondsDateHours =+prompt('часы второго дня');

console.log("разница "+converter(firstDateSeconds,firstDateMinutes,firstDateHours,secondDateSeconds,secondsDateMinutes, secondsDateHours));