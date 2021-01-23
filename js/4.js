let audience = [
    {
        name:305,
        seats:20,
        faculty:"It",
    },
    {
        name:308,
        seats:15,
        faculty:"finance",
    },
    {
        name:300,
        seats:11,
        faculty:"Biology",
    }
];

function printAudience(array){
    array.forEach(function(element){
        console.log(element);
    });
};
printAudience(audience);
function printSelectAudience(array, faculty){
    array.forEach(function(element){
        if(element.faculty === faculty){
            console.log("Аудитория "+element.name);
        };
    });
};
printSelectAudience(audience, prompt("Специальность "));
let firstGroup = {
    name:'firstGroup',
    seats:10,
    faculty:'Biology',
};
function printGroupAudience(object, audience){
    audience.forEach(function(element){
        if(object.faculty===element.faculty && element.seats>=object.seats){
            console.log(element);
        };
    });
};

printGroupAudience(firstGroup,audience);


audience.sort(function (a, b) {
    return a.places - b.places;
});
console.log(audience);

audience.sort(function (a, b) {
    if (a.faculty > b.faculty) {
      return 1;
    }
    if (a.faculty < b.faculty) {
      return -1;
    }
    return 0;
  });
console.log(audience);