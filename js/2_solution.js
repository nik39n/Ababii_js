function Evklid(numberOne,numberTwo){
    if(numberOne === numberTwo){
        return numberOne;

    } else{
        if(numberOne>numberTwo){
            return Evklid(numberOne-numberTwo, numberTwo);
        }  else {
            return Evklid(numberOne,numberTwo - numberOne);
        }
    }
}
console.log(Evklid(30,18));