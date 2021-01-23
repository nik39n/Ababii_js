let check = [
    {
        name:'Огурец',
        count:2,
        price:20,

    },
    {
        name:'Морковь',
        count:10,
        price:9,
    },
    {
        name:'Колбаса',
        count:5,
        price:40,
    }
];
function checkPrint(array){
    array.forEach(function(element){
        console.log(element.name+' '+element.count+' штук '+element.price+" грн за еденицу")
    });
};
checkPrint(check);
function countEqualSum(array){
    let total=0;
    array.forEach(function(element){
        total += (element.count)*(element.price); 
    });
    console.log("Total:"+ total);
};
countEqualSum(check);
function getExpensive(array){
    let temp = 0;
    let tempName ;
    for (let i = 0;i<array.length; i++){
        if (array[i].price>temp){
            temp = array[i].price;
            tempName = array[i].name;
        }
    };
    console.log(tempName+"- Самый дорогой продукт");
};
getExpensive(check);
function countAvarageSum(array){
    let total=0;
    array.forEach(function(element){
        total += (element.count)*(element.price);
        total = total/array.length; 
    });
    console.log(total+'- Средняя стоимсть товара в чеке');
}
countAvarageSum(check);

