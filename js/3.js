let styles = [
    {
        name:'color:',
        value:'#a83939;',
    },
    {
        name:'font-size:',
        value:'32px;',
    },
    {
        name:'text-align:',
        value:'center;',
    }
];
function printOut(array,text){
    for(let i = 0;i<array.length;i++){
        document.write(`<p>${text}</p><style>${'p{'+array[i].name+array[i].value+'}'}</style>`)
    }
}
printOut(styles,prompt("Text"));