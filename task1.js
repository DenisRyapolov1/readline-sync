const readlineSync = require('readline-sync');
const IncomeTaxCalculator=()=> {
    const income=readlineSync.question("Введите доход");
    return income * (15/100);
}
console.log(IncomeTaxCalculator());