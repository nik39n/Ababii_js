// 2.3. Переменная language может принимать 2 значения: 'ru' или 'en'. Если она имеет значение 'ru', то
// в переменную message запишите сообщение Хорошего дня!, а если имеет значение 'en' – то это же
// сообщение, но на английском (Have a nice day!). Выведите message.
let language ="ru";
let message;
if (language === 'ru'){
    message = "Хорошего дня!";
    console.log(message);
} else if (language === "en"){
    message = "Have a nice day!";
    console.log(message);
}