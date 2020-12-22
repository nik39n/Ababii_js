function area(width, height){
    if (width === 0){
        return height*height;
    } else if (height === 0){
        return width*width;
    } else{
        return width*height;
    }
}
let width = +prompt(" Длина прямоугольника ");
let heigth =+prompt(" Ширина прямоугольника " );
console.log(area(width,heigth));