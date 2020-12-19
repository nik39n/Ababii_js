let lengthCircle = +prompt(" Введите длину окружности ");
let lengthSquare = +prompt(" Ведите периметр квадрата ");
if (isNaN(lengthSquare) && isNaN(lengthCircle)){
    throw "Ошибка числа";
}
let rads = lengthSquare/4;
let rads_circle = Math.floor(lengthCircle/(2*Math.PI));
if (rads > rads_circle/2){
    console.log( " Может быть вписан " );

} else {
    console.log(" не может быть вписан ");
};