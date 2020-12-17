let yearNumber = +prompt("Напишите год");
if (isNaN(age)){
    throw "Ошибка ввода";
}
if((yearNumber%1000 === 0 || yearNumber%4 === 0)&& (yearNumber%100!==0)){
    console.log("Высокосный год!!!");

}