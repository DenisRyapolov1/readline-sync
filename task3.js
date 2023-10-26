const readlineSync = require('readline-sync');
const CalculateDiscount=()=> {
    const price=readlineSync.question("Цена товара");
    const DiscountProperies=readlineSync.question("Процент скидки");
    return price-(price*DiscountProperies)/100;
}
console.log(CalculateDiscount());