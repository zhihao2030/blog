// lib.js
let counter = 3;
let obj = {
    a: 1
}
function incCounter() {
    counter++;
    obj.a = 10
    console.log(counter)
}
module.exports = {
    obj,
    counter: counter,
    incCounter: incCounter,
};
console.log(module)
console.log(exports)
