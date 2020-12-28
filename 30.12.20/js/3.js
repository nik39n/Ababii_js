let time={
    seconds:2,
    minutes:25,
    hours:5,
    timeOut:function(){
        return " Секунд: "+this.seconds+" Минут: "+ this.minutes+"Часов: "+this.hours;
    },
    changeSeconds:function(cSec){
        let  result = this.minutes;
        let secinds = 0;
        if ((this.seconds+cSec)<60){
            secinds = this.seconds+cSec;}
        if ((this.seconds+cSec)>60){
            result=this.minutes+=Math.floor((this.seconds+cSec)/60);
            secinds += (this.seconds+cSec)-((Math.floor((this.seconds+cSec)/60))*60)
        }
        return " Секунд: "+secinds+" Минут: "+ result+" Часов: "+this.hours;
    },
    changeMinutes:function(cMin){
        let  result = this.hours;
        let minutes = 0;
        if ((this.minutes+cMin)<60){
            minutes = this.minutes+cMin;}
        if ((this.minutes+cMin)>60){
            result=this.hours+=Math.floor((this.minutes+cMin)/60);
            minutes += (this.minutes+cMin)-((Math.floor((this.minutes+cMin)/60))*60)
        }
        return " Секунд: "+this.seconds+" Минут: "+ minutes+" Часов: "+result;
    },
    changeHours:function(cHour){
        return " Секунд: "+this.seconds+" Минут: "+ this.minutes+" Часов: "+(this.hours+cHour);
    }
}

let cSec = +prompt("Секунды");
let cMin = +prompt("Минуты");
let cHour = +prompt("Часы ");
console.log(time.changeSeconds(cSec));
console.log(time.changeMinutes(cMin));
console.log(time.changeHours(cHour));
