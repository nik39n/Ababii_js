// 4. Написать функцию, которая определяет простое ли пере-
// данное число.
function SingleNumber(number){
    let counter = 2;
    if (number === 1 || number === 0 ){
        return true;
    }
    if (number%counter!==0){
        console.log(counter);
        return SingleNumber(number,counter+1);
    } else {
        return false;
    }
}
console.log(SingleNumber(21));