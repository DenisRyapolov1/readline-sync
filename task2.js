const readlineSync = require('readline-sync');
const celsiusToFahrenheit=()=> {
    const cels=readlineSync.question("Введите температуру");
    return cels * (9/5)+32;
}
console.log(celsiusToFahrenheit());