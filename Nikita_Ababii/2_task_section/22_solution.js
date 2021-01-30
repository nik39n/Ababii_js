// 2.2. В переменной minutes лежит число от 0 до 59 (количество минут). Определите в какую четверть часа
// попадает это число (в первую, вторую, третью или четвертую).
let minutes = 32;
if (minutes>1 && minutes<=15){
    console.log("Первая четверть");
};
if(minutes>15 && minutes<=30){
    console.log("Вторая четверть");
};
if(minutes>30 && minutes<=45){    
console.log("Третя четверть");
};
if(minutes>45 && minutes<60){
    console.log("Четвертая четверть");
};
