//Arithmatic Operators
const a = 100;
const b = 25;
let x;

//simple Math with calculations
//addition
x = a + b;
//subtaction
x = a - b;
//Multiplication
x = a * b;
//Division
x = a / b;
//Modulus (remainder of)
x = a % b;

//Math
x = Math.PI;
x = Math.round(5.8);
x = Math.ceil(4.2);
x = Math.floor(4.8);
x = Math.sqrt(64);
x = Math.pow(8, 2);
x = Math.abs(-25);
x = Math.min(55, 32, 12, 13, 56, -10);
x = Math.max(55, 32, 12, 13, 56, -10);
x = Math.random();
x = Math.floor(Math.random() * 100 + 1);

function calculateArea(radius){
    let Area = (Math.PI) * radius * radius;
    return Area;
}

console.log(calculateArea(5));
console.log(Math.sin(90 * Math.PI / 180));


console.log(x);