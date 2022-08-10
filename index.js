var myVar = 23; // Implicit assignment	
var anotherVar; // Explicit assignment
var redundant = 'Hello world'; // Not needed, avoid
var animal1 = {
    name: 'Cat',
    legs: 4,
    canFly: false
};
var animal2 = {
    name: 'Bird',
    legs: 2,
    canFly: true
};
// Now I can add more fields
var vehicle1 = {
    name: 'Car',
    wheels: 4,
    color: 'blue',
    brand: 'bmw'
};
var vehicle2 = {
    name: 'Cycle',
    wheels: 2,
    color: 'white'
};
/* Functions */
function divide(x, y) {
    return x / y;
}
console.log(divide('hello', 'world'));
console.log(divide(8, 2));
