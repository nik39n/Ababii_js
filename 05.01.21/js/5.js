function isSquare(K){
    if (K>0 && !isNaN(K)){
    } else {
        throw (" это не число ");
    }
    let roundSqrt = Math.round((Math.sqrt(K)));
    if ((roundSqrt*roundSqrt)===(K)){
        console.log("True");
    } else{
        console.log("False");
    }
}
let number = +prompt(" Ведите число ");
console.log(isSquare(number));