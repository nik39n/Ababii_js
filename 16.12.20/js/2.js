let number = +prompt("Ведите число от 0 до 9");
if (isNaN(age)){
    throw "Ошибка ввода";
}
switch(number){
    case 1:
        console.log("!");
        break;
    case 2:
        console.log("@");
        break;
    case 3:
        console.log("#");
    case 4:
        console.log("$");
        break;
    case 5:
        console.log("%");
        break;
    case 6:
        console.log("^");
        break;
    case 7:
        console.log("&");
        break;
    case 8:
        console.log("*");
        break;
    case 9:
        console.log("(");
        break;
    case 0:
        console.log(")");
        break;
}