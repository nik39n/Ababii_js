let buyList = [
    {
        name:'Chiken',
        value:1,
        status:false,
    },
    {
        name:'Tomato',
        value:30,
        status:true,
    },
    {
        name:'Potatoes',
        value:40,
        status:false,
    },
    {
        name:'Ketchup',
        vlaue:1,
        status:true,
    }
];
function sort(massive){
    massive.forEach(function(element){
        if(element.status === false){
            massive.push(element);
            let id= massive.indexOf(element);
            massive.splice(id,1);      
        }
    });
    massive.forEach(function(element){
        console.log(element.name);
    });
};
sort(buyList);
function add(massive, item){
    let flag;
    massive.forEach(function(element){
        if(element.name===item){
            element.value+=1;
            flag = true;
        }
        console.log(element.name);
    });
    if(flag!==true){
        massive.push({name:item});

    }
};
add(buyList,prompt('add product'));
function buyItem(array,item){
    array.forEach(function(element){
        if (element.name === item){
            element.status = true;
        }
        console.log(element);
    });
}
buyItem(buyList, prompt("Chech product"));