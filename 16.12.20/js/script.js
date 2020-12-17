let age = +prompt("Ваш возраст");
if (isNaN(age)){
    throw "Ошибка ввода";
}
switch (true){
    case (age<=2):
        console.log("Вы ребенок");
        break;
    case (age<=18):
        console.log("Вы подросток");
        break;
    case (age<60):
        console.log("Вы взрослый");
        break;
    case (age>=60):
        console.log("Вы пенсионер");
        break;
}