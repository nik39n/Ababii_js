let seconds = +prompt(" Количество секунд ");
function counterHours(seconds){
    let hours = Math.floor(seconds/3600);
    seconds -=hours*3600; 
    let minutes = Math.floor(seconds/60);
    seconds -= minutes*60;
    return hours + " часов " +minutes+ " минут "  +
    seconds+" секунд  ";

}
console.log(counterHours(seconds));