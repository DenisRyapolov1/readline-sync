const readlineSync = require('readline-sync');
const CalculateRectangleProperties=()=> {
    const width=readlineSync.question("Ширина");
    const height=readlineSync.question("Высота");
    return [width*height, width*2+height*2];
}
console.log(CalculateRectangleProperties());