const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = function(sign, a, b) {
    if(sign === add) {
        return add(a, b)
    };
    if(sign === subtract) {
        return subtract(a, b)
    };
    if(sign === multiply) {
        return multiply(a, b)
    };
    if(sign === divide) {
        return divide(a, b)
    };
};