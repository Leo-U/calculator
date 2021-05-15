const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const power = (a, b) => a ** b;

const operate = function(sign, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    if(sign === "+") {
        return add(a, b)
    };
    if(sign === "-") {
        return subtract(a, b)
    };
    if(sign === "*") {
        return multiply(a, b)
    };
    if(sign === "/") {
        return divide(a, b)
    };
    if(sign === "**") {
        return power(a, b)
    };
};

// buttons

const button0 = document.getElementById("button-0");
const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const button4 = document.getElementById("button-4");
const button5 = document.getElementById("button-5");
const button6 = document.getElementById("button-6");
const button7 = document.getElementById("button-7");
const button8 = document.getElementById("button-8");
const button9 = document.getElementById("button-9");
const buttonAdd = document.getElementById("button-add");
const buttonSubtract = document.getElementById("button-subtract");
const buttonMultiply = document.getElementById("button-multiply");
const buttonDivide = document.getElementById("button-divide");
const buttonPower = document.getElementById("button-power");
const buttonPoint = document.getElementById("button-point");
const buttonClear = document.getElementById("button-clear");
const buttonEnter = document.getElementById("button-enter");

//display

const neg = document.getElementById("negative");
const dot1 = document.getElementById("dot-1");
const dot2 = document.getElementById("dot-2");
const dot3 = document.getElementById("dot-3");
const dot4 = document.getElementById("dot-4");
const dot5 = document.getElementById("dot-5");
const dot6 = document.getElementById("dot-6");
const dot7 = document.getElementById("dot-7");
const dot8 = document.getElementById("dot-8");
const dot9 = document.getElementById("dot-9");
const dot10 = document.getElementById("dot-10");
const dot11 = document.getElementById("dot-11");
const dot12 = document.getElementById("dot-12");
const dot13 = document.getElementById("dot-13");
const digit1 = document.getElementById("digit-1");
const digit2 = document.getElementById("digit-2");
const digit3 = document.getElementById("digit-3");
const digit4 = document.getElementById("digit-4");
const digit5 = document.getElementById("digit-5");
const digit6 = document.getElementById("digit-6");
const digit7 = document.getElementById("digit-7");
const digit8 = document.getElementById("digit-8");
const digit9 = document.getElementById("digit-9");
const digit10 = document.getElementById("digit-10");
const digit11 = document.getElementById("digit-11");
const digit12 = document.getElementById("digit-12");


//populate display

let initialString = '';

const pressed0 = () => {
    if(initialString.length >= 1) {
        initialString += '0';
        if(!initialString.includes('.') && !initialString.includes('-')){
            if(initialString.length == 2){
                digit2.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 3){
                digit3.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 4){
                digit4.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 5){
                digit5.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 6){
                digit6.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 7){
                digit7.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 8){
                digit8.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 9){
                digit9.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 10){
                digit10.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 11){
                digit11.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 12){
                digit12.style.backgroundImage = "url('images/zero.svg')"
            }
        }else if(initialString.includes('.') && !initialString.includes('-') || initialString.includes('-') && !initialString.includes('.')) {
            if(initialString.length == 2) {
                digit1.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 3){
                digit2.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 4){
                digit3.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 5){
                digit4.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 6){
                digit5.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 7){
                digit6.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 8){
                digit7.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 9){
                digit8.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 10){
                digit9.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 11){
                digit10.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 12){
                digit11.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 13){
                digit12.style.backgroundImage = "url('images/zero.svg')"
            }
        }else {
            if(initialString.length == 3) {
                digit1.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 4) {
                digit2.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 5) {
                digit3.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 6) {
                digit4.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 7) {
                digit5.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 8) {
                digit6.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 9) {
                digit7.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 10) {
                digit8.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 11) {
                digit9.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 12) {
                digit10.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 13) {
                digit11.style.backgroundImage = "url('images/zero.svg')"
            }
            if(initialString.length == 14) {
                digit12.style.backgroundImage = "url('images/zero.svg')"
            }
        }

    };
};

button0.addEventListener('click', pressed0);

const pressed1 = () => {
    initialString += '1';
    if(!initialString.includes('.') && !initialString.includes('-')) {
        if(initialString.length == 1) {
            digit1.style.backgroundImage = "url('images/one.svg')";
        }
        if(initialString.length == 2) {
            digit2.style.backgroundImage = "url('images/one.svg')";
        }
        if(initialString.length == 3) {
            digit3.style.backgroundImage = "url('images/one.svg')";
        }
        if(initialString.length == 4) {
            digit4.style.backgroundImage = "url('images/one.svg')";
        }
        if(initialString.length == 5) {
            digit5.style.backgroundImage = "url('images/one.svg')";
        }
        if(initialString.length == 6) {
            digit6.style.backgroundImage = "url('images/one.svg')";
        }
        if(initialString.length == 7) {
            digit7.style.backgroundImage = "url('images/one.svg')";
        }
        if(initialString.length == 8) {
            digit8.style.backgroundImage = "url('images/one.svg')";
        }
        if(initialString.length == 9) {
            digit9.style.backgroundImage = "url('images/one.svg')";
        }
        if(initialString.length == 10) {
            digit10.style.backgroundImage = "url('images/one.svg')";
        }
        if(initialString.length == 11) {
            digit11.style.backgroundImage = "url('images/one.svg')";
        }
        if(initialString.length == 12) {
            digit12.style.backgroundImage = "url('images/one.svg')";
        }  
    }else if(initialString.includes('.') && !initialString.includes('-') || initialString.includes('-') && !initialString.includes('.')) {
        if(initialString.length == 2) {
            digit1.style.backgroundImage = "url('images/one.svg')";
        }
        if(initialString.length == 3) {
            digit2.style.backgroundImage = "url('images/one.svg')";
        }
        if(initialString.length == 4) {
            digit3.style.backgroundImage = "url('images/one.svg')";
        }
        if(initialString.length == 5) {
            digit4.style.backgroundImage = "url('images/one.svg')";
        }
        if(initialString.length == 6) {
            digit5.style.backgroundImage = "url('images/one.svg')";
        }
        if(initialString.length == 7) {
            digit6.style.backgroundImage = "url('images/one.svg')";
        }
        if(initialString.length == 8) {
            digit7.style.backgroundImage = "url('images/one.svg')";
        }
        if(initialString.length == 9) {
            digit8.style.backgroundImage = "url('images/one.svg')";
        }
        if(initialString.length == 10) {
            digit9.style.backgroundImage = "url('images/one.svg')";
        }
        if(initialString.length == 11) {
            digit10.style.backgroundImage = "url('images/one.svg')";
        }
        if(initialString.length == 12) {
            digit11.style.backgroundImage = "url('images/one.svg')";
        }
        if(initialString.length == 13) {
            digit12.style.backgroundImage = "url('images/one.svg')";
        }
    }else {
        if(initialString.length == 3) {
            digit1.style.backgroundImage = "url('images/one.svg')"
        }
        if(initialString.length == 4) {
            digit2.style.backgroundImage = "url('images/one.svg')"
        }
        if(initialString.length == 5) {
            digit3.style.backgroundImage = "url('images/one.svg')"
        }
        if(initialString.length == 6) {
            digit4.style.backgroundImage = "url('images/one.svg')"
        }
        if(initialString.length == 7) {
            digit5.style.backgroundImage = "url('images/one.svg')"
        }
        if(initialString.length == 8) {
            digit6.style.backgroundImage = "url('images/one.svg')"
        }
        if(initialString.length == 9) {
            digit7.style.backgroundImage = "url('images/one.svg')"
        }
        if(initialString.length == 10) {
            digit8.style.backgroundImage = "url('images/one.svg')"
        }
        if(initialString.length == 11) {
            digit9.style.backgroundImage = "url('images/one.svg')"
        }
        if(initialString.length == 12) {
            digit10.style.backgroundImage = "url('images/one.svg')"
        }
        if(initialString.length == 13) {
            digit11.style.backgroundImage = "url('images/one.svg')"
        }
        if(initialString.length == 14) {
            digit12.style.backgroundImage = "url('images/one.svg')"
        }
    }

};

button1.addEventListener('click', pressed1);

const pressed2 = () => {
    initialString += '2';
    if(!initialString.includes('.') && !initialString.includes('-')) {
        if(initialString.length == 1) {
            digit1.style.backgroundImage = "url('images/two.svg')";
        }
        if(initialString.length == 2) {
            digit2.style.backgroundImage = "url('images/two.svg')";
        }
        if(initialString.length == 3) {
            digit3.style.backgroundImage = "url('images/two.svg')";
        }
        if(initialString.length == 4) {
            digit4.style.backgroundImage = "url('images/two.svg')";
        }
        if(initialString.length == 5) {
            digit5.style.backgroundImage = "url('images/two.svg')";
        }
        if(initialString.length == 6) {
            digit6.style.backgroundImage = "url('images/two.svg')";
        }
        if(initialString.length == 7) {
            digit7.style.backgroundImage = "url('images/two.svg')";
        }
        if(initialString.length == 8) {
            digit8.style.backgroundImage = "url('images/two.svg')";
        }
        if(initialString.length == 9) {
            digit9.style.backgroundImage = "url('images/two.svg')";
        }
        if(initialString.length == 10) {
            digit10.style.backgroundImage = "url('images/two.svg')";
        }
        if(initialString.length == 11) {
            digit11.style.backgroundImage = "url('images/two.svg')";
        }
        if(initialString.length == 12) {
            digit12.style.backgroundImage = "url('images/two.svg')";
        }  
    }else if(initialString.includes('.') && !initialString.includes('-') || initialString.includes('-') && !initialString.includes('.')) {
        if(initialString.length == 2) {
            digit1.style.backgroundImage = "url('images/two.svg')";
        }
        if(initialString.length == 3) {
            digit2.style.backgroundImage = "url('images/two.svg')";
        }
        if(initialString.length == 4) {
            digit3.style.backgroundImage = "url('images/two.svg')";
        }
        if(initialString.length == 5) {
            digit4.style.backgroundImage = "url('images/two.svg')";
        }
        if(initialString.length == 6) {
            digit5.style.backgroundImage = "url('images/two.svg')";
        }
        if(initialString.length == 7) {
            digit6.style.backgroundImage = "url('images/two.svg')";
        }
        if(initialString.length == 8) {
            digit7.style.backgroundImage = "url('images/two.svg')";
        }
        if(initialString.length == 9) {
            digit8.style.backgroundImage = "url('images/two.svg')";
        }
        if(initialString.length == 10) {
            digit9.style.backgroundImage = "url('images/two.svg')";
        }
        if(initialString.length == 11) {
            digit10.style.backgroundImage = "url('images/two.svg')";
        }
        if(initialString.length == 12) {
            digit11.style.backgroundImage = "url('images/two.svg')";
        }
        if(initialString.length == 13) {
            digit12.style.backgroundImage = "url('images/two.svg')";
        }
    }else {
        if(initialString.length == 3) {
            digit1.style.backgroundImage = "url('images/two.svg')"
        }
        if(initialString.length == 4) {
            digit2.style.backgroundImage = "url('images/two.svg')"
        }
        if(initialString.length == 5) {
            digit3.style.backgroundImage = "url('images/two.svg')"
        }
        if(initialString.length == 6) {
            digit4.style.backgroundImage = "url('images/two.svg')"
        }
        if(initialString.length == 7) {
            digit5.style.backgroundImage = "url('images/two.svg')"
        }
        if(initialString.length == 8) {
            digit6.style.backgroundImage = "url('images/two.svg')"
        }
        if(initialString.length == 9) {
            digit7.style.backgroundImage = "url('images/two.svg')"
        }
        if(initialString.length == 10) {
            digit8.style.backgroundImage = "url('images/two.svg')"
        }
        if(initialString.length == 11) {
            digit9.style.backgroundImage = "url('images/two.svg')"
        }
        if(initialString.length == 12) {
            digit10.style.backgroundImage = "url('images/two.svg')"
        }
        if(initialString.length == 13) {
            digit11.style.backgroundImage = "url('images/two.svg')"
        }
        if(initialString.length == 14) {
            digit12.style.backgroundImage = "url('images/two.svg')"
        }
    }
};

button2.addEventListener('click', pressed2);

const pressed3 = () => {
    initialString += '3';
    if(!initialString.includes('.') && !initialString.includes('-')) {
        if(initialString.length == 1) {
            digit1.style.backgroundImage = "url('images/three.svg')";
        }
        if(initialString.length == 2) {
            digit2.style.backgroundImage = "url('images/three.svg')";
        }
        if(initialString.length == 3) {
            digit3.style.backgroundImage = "url('images/three.svg')";
        }
        if(initialString.length == 4) {
            digit4.style.backgroundImage = "url('images/three.svg')";
        }
        if(initialString.length == 5) {
            digit5.style.backgroundImage = "url('images/three.svg')";
        }
        if(initialString.length == 6) {
            digit6.style.backgroundImage = "url('images/three.svg')";
        }
        if(initialString.length == 7) {
            digit7.style.backgroundImage = "url('images/three.svg')";
        }
        if(initialString.length == 8) {
            digit8.style.backgroundImage = "url('images/three.svg')";
        }
        if(initialString.length == 9) {
            digit9.style.backgroundImage = "url('images/three.svg')";
        }
        if(initialString.length == 10) {
            digit10.style.backgroundImage = "url('images/three.svg')";
        }
        if(initialString.length == 11) {
            digit11.style.backgroundImage = "url('images/three.svg')";
        }
        if(initialString.length == 12) {
            digit12.style.backgroundImage = "url('images/three.svg')";
        }  
    }else if(initialString.includes('.') && !initialString.includes('-') || initialString.includes('-') && !initialString.includes('.')) {
        if(initialString.length == 2) {
            digit1.style.backgroundImage = "url('images/three.svg')";
        }
        if(initialString.length == 3) {
            digit2.style.backgroundImage = "url('images/three.svg')";
        }
        if(initialString.length == 4) {
            digit3.style.backgroundImage = "url('images/three.svg')";
        }
        if(initialString.length == 5) {
            digit4.style.backgroundImage = "url('images/three.svg')";
        }
        if(initialString.length == 6) {
            digit5.style.backgroundImage = "url('images/three.svg')";
        }
        if(initialString.length == 7) {
            digit6.style.backgroundImage = "url('images/three.svg')";
        }
        if(initialString.length == 8) {
            digit7.style.backgroundImage = "url('images/three.svg')";
        }
        if(initialString.length == 9) {
            digit8.style.backgroundImage = "url('images/three.svg')";
        }
        if(initialString.length == 10) {
            digit9.style.backgroundImage = "url('images/three.svg')";
        }
        if(initialString.length == 11) {
            digit10.style.backgroundImage = "url('images/three.svg')";
        }
        if(initialString.length == 12) {
            digit11.style.backgroundImage = "url('images/three.svg')";
        }
        if(initialString.length == 13) {
            digit12.style.backgroundImage = "url('images/three.svg')";
        }
    }else {
        if(initialString.length == 3) {
            digit1.style.backgroundImage = "url('images/three.svg')"
        }
        if(initialString.length == 4) {
            digit2.style.backgroundImage = "url('images/three.svg')"
        }
        if(initialString.length == 5) {
            digit3.style.backgroundImage = "url('images/three.svg')"
        }
        if(initialString.length == 6) {
            digit4.style.backgroundImage = "url('images/three.svg')"
        }
        if(initialString.length == 7) {
            digit5.style.backgroundImage = "url('images/three.svg')"
        }
        if(initialString.length == 8) {
            digit6.style.backgroundImage = "url('images/three.svg')"
        }
        if(initialString.length == 9) {
            digit7.style.backgroundImage = "url('images/three.svg')"
        }
        if(initialString.length == 10) {
            digit8.style.backgroundImage = "url('images/three.svg')"
        }
        if(initialString.length == 11) {
            digit9.style.backgroundImage = "url('images/three.svg')"
        }
        if(initialString.length == 12) {
            digit10.style.backgroundImage = "url('images/three.svg')"
        }
        if(initialString.length == 13) {
            digit11.style.backgroundImage = "url('images/three.svg')"
        }
        if(initialString.length == 14) {
            digit12.style.backgroundImage = "url('images/three.svg')"
        }
    }
};

button3.addEventListener('click', pressed3);

const pressed4 = () => {
    initialString += '4';
    if(!initialString.includes('.') && !initialString.includes('-')) {
        if(initialString.length == 1) {
            digit1.style.backgroundImage = "url('images/four.svg')";
        }
        if(initialString.length == 2) {
            digit2.style.backgroundImage = "url('images/four.svg')";
        }
        if(initialString.length == 3) {
            digit3.style.backgroundImage = "url('images/four.svg')";
        }
        if(initialString.length == 4) {
            digit4.style.backgroundImage = "url('images/four.svg')";
        }
        if(initialString.length == 5) {
            digit5.style.backgroundImage = "url('images/four.svg')";
        }
        if(initialString.length == 6) {
            digit6.style.backgroundImage = "url('images/four.svg')";
        }
        if(initialString.length == 7) {
            digit7.style.backgroundImage = "url('images/four.svg')";
        }
        if(initialString.length == 8) {
            digit8.style.backgroundImage = "url('images/four.svg')";
        }
        if(initialString.length == 9) {
            digit9.style.backgroundImage = "url('images/four.svg')";
        }
        if(initialString.length == 10) {
            digit10.style.backgroundImage = "url('images/four.svg')";
        }
        if(initialString.length == 11) {
            digit11.style.backgroundImage = "url('images/four.svg')";
        }
        if(initialString.length == 12) {
            digit12.style.backgroundImage = "url('images/four.svg')";
        }  
    }else if(initialString.includes('.') && !initialString.includes('-') || initialString.includes('-') && !initialString.includes('.')) {
        if(initialString.length == 2) {
            digit1.style.backgroundImage = "url('images/four.svg')";
        }
        if(initialString.length == 3) {
            digit2.style.backgroundImage = "url('images/four.svg')";
        }
        if(initialString.length == 4) {
            digit3.style.backgroundImage = "url('images/four.svg')";
        }
        if(initialString.length == 5) {
            digit4.style.backgroundImage = "url('images/four.svg')";
        }
        if(initialString.length == 6) {
            digit5.style.backgroundImage = "url('images/four.svg')";
        }
        if(initialString.length == 7) {
            digit6.style.backgroundImage = "url('images/four.svg')";
        }
        if(initialString.length == 8) {
            digit7.style.backgroundImage = "url('images/four.svg')";
        }
        if(initialString.length == 9) {
            digit8.style.backgroundImage = "url('images/four.svg')";
        }
        if(initialString.length == 10) {
            digit9.style.backgroundImage = "url('images/four.svg')";
        }
        if(initialString.length == 11) {
            digit10.style.backgroundImage = "url('images/four.svg')";
        }
        if(initialString.length == 12) {
            digit11.style.backgroundImage = "url('images/four.svg')";
        }
        if(initialString.length == 13) {
            digit12.style.backgroundImage = "url('images/four.svg')";
        }
    }else {
        if(initialString.length == 3) {
            digit1.style.backgroundImage = "url('images/four.svg')"
        }
        if(initialString.length == 4) {
            digit2.style.backgroundImage = "url('images/four.svg')"
        }
        if(initialString.length == 5) {
            digit3.style.backgroundImage = "url('images/four.svg')"
        }
        if(initialString.length == 6) {
            digit4.style.backgroundImage = "url('images/four.svg')"
        }
        if(initialString.length == 7) {
            digit5.style.backgroundImage = "url('images/four.svg')"
        }
        if(initialString.length == 8) {
            digit6.style.backgroundImage = "url('images/four.svg')"
        }
        if(initialString.length == 9) {
            digit7.style.backgroundImage = "url('images/four.svg')"
        }
        if(initialString.length == 10) {
            digit8.style.backgroundImage = "url('images/four.svg')"
        }
        if(initialString.length == 11) {
            digit9.style.backgroundImage = "url('images/four.svg')"
        }
        if(initialString.length == 12) {
            digit10.style.backgroundImage = "url('images/four.svg')"
        }
        if(initialString.length == 13) {
            digit11.style.backgroundImage = "url('images/four.svg')"
        }
        if(initialString.length == 14) {
            digit12.style.backgroundImage = "url('images/four.svg')"
        }
    }
};

button4.addEventListener('click', pressed4);

const pressed5 = () => {
    initialString += '5';
    if(!initialString.includes('.') && !initialString.includes('-')) {
        if(initialString.length == 1) {
            digit1.style.backgroundImage = "url('images/five.svg')";
        }
        if(initialString.length == 2) {
            digit2.style.backgroundImage = "url('images/five.svg')";
        }
        if(initialString.length == 3) {
            digit3.style.backgroundImage = "url('images/five.svg')";
        }
        if(initialString.length == 4) {
            digit4.style.backgroundImage = "url('images/five.svg')";
        }
        if(initialString.length == 5) {
            digit5.style.backgroundImage = "url('images/five.svg')";
        }
        if(initialString.length == 6) {
            digit6.style.backgroundImage = "url('images/five.svg')";
        }
        if(initialString.length == 7) {
            digit7.style.backgroundImage = "url('images/five.svg')";
        }
        if(initialString.length == 8) {
            digit8.style.backgroundImage = "url('images/five.svg')";
        }
        if(initialString.length == 9) {
            digit9.style.backgroundImage = "url('images/five.svg')";
        }
        if(initialString.length == 10) {
            digit10.style.backgroundImage = "url('images/five.svg')";
        }
        if(initialString.length == 11) {
            digit11.style.backgroundImage = "url('images/five.svg')";
        }
        if(initialString.length == 12) {
            digit12.style.backgroundImage = "url('images/five.svg')";
        }  
    }else if(initialString.includes('.') && !initialString.includes('-') || initialString.includes('-') && !initialString.includes('.')) {
        if(initialString.length == 2) {
            digit1.style.backgroundImage = "url('images/five.svg')";
        }
        if(initialString.length == 3) {
            digit2.style.backgroundImage = "url('images/five.svg')";
        }
        if(initialString.length == 4) {
            digit3.style.backgroundImage = "url('images/five.svg')";
        }
        if(initialString.length == 5) {
            digit4.style.backgroundImage = "url('images/five.svg')";
        }
        if(initialString.length == 6) {
            digit5.style.backgroundImage = "url('images/five.svg')";
        }
        if(initialString.length == 7) {
            digit6.style.backgroundImage = "url('images/five.svg')";
        }
        if(initialString.length == 8) {
            digit7.style.backgroundImage = "url('images/five.svg')";
        }
        if(initialString.length == 9) {
            digit8.style.backgroundImage = "url('images/five.svg')";
        }
        if(initialString.length == 10) {
            digit9.style.backgroundImage = "url('images/five.svg')";
        }
        if(initialString.length == 11) {
            digit10.style.backgroundImage = "url('images/five.svg')";
        }
        if(initialString.length == 12) {
            digit11.style.backgroundImage = "url('images/five.svg')";
        }
        if(initialString.length == 13) {
            digit12.style.backgroundImage = "url('images/five.svg')";
        }
    }else {
        if(initialString.length == 3) {
            digit1.style.backgroundImage = "url('images/five.svg')"
        }
        if(initialString.length == 4) {
            digit2.style.backgroundImage = "url('images/five.svg')"
        }
        if(initialString.length == 5) {
            digit3.style.backgroundImage = "url('images/five.svg')"
        }
        if(initialString.length == 6) {
            digit4.style.backgroundImage = "url('images/five.svg')"
        }
        if(initialString.length == 7) {
            digit5.style.backgroundImage = "url('images/five.svg')"
        }
        if(initialString.length == 8) {
            digit6.style.backgroundImage = "url('images/five.svg')"
        }
        if(initialString.length == 9) {
            digit7.style.backgroundImage = "url('images/five.svg')"
        }
        if(initialString.length == 10) {
            digit8.style.backgroundImage = "url('images/five.svg')"
        }
        if(initialString.length == 11) {
            digit9.style.backgroundImage = "url('images/five.svg')"
        }
        if(initialString.length == 12) {
            digit10.style.backgroundImage = "url('images/five.svg')"
        }
        if(initialString.length == 13) {
            digit11.style.backgroundImage = "url('images/five.svg')"
        }
        if(initialString.length == 14) {
            digit12.style.backgroundImage = "url('images/five.svg')"
        }
    }
};

button5.addEventListener('click', pressed5);

const pressed6 = () => {
    initialString += '6';
    if(!initialString.includes('.') && !initialString.includes('-')) {
        if(initialString.length == 1) {
            digit1.style.backgroundImage = "url('images/six.svg')";
        }
        if(initialString.length == 2) {
            digit2.style.backgroundImage = "url('images/six.svg')";
        }
        if(initialString.length == 3) {
            digit3.style.backgroundImage = "url('images/six.svg')";
        }
        if(initialString.length == 4) {
            digit4.style.backgroundImage = "url('images/six.svg')";
        }
        if(initialString.length == 5) {
            digit5.style.backgroundImage = "url('images/six.svg')";
        }
        if(initialString.length == 6) {
            digit6.style.backgroundImage = "url('images/six.svg')";
        }
        if(initialString.length == 7) {
            digit7.style.backgroundImage = "url('images/six.svg')";
        }
        if(initialString.length == 8) {
            digit8.style.backgroundImage = "url('images/six.svg')";
        }
        if(initialString.length == 9) {
            digit9.style.backgroundImage = "url('images/six.svg')";
        }
        if(initialString.length == 10) {
            digit10.style.backgroundImage = "url('images/six.svg')";
        }
        if(initialString.length == 11) {
            digit11.style.backgroundImage = "url('images/six.svg')";
        }
        if(initialString.length == 12) {
            digit12.style.backgroundImage = "url('images/six.svg')";
        }  
    }else if(initialString.includes('.') && !initialString.includes('-') || initialString.includes('-') && !initialString.includes('.')) {
        if(initialString.length == 2) {
            digit1.style.backgroundImage = "url('images/six.svg')";
        }
        if(initialString.length == 3) {
            digit2.style.backgroundImage = "url('images/six.svg')";
        }
        if(initialString.length == 4) {
            digit3.style.backgroundImage = "url('images/six.svg')";
        }
        if(initialString.length == 5) {
            digit4.style.backgroundImage = "url('images/six.svg')";
        }
        if(initialString.length == 6) {
            digit5.style.backgroundImage = "url('images/six.svg')";
        }
        if(initialString.length == 7) {
            digit6.style.backgroundImage = "url('images/six.svg')";
        }
        if(initialString.length == 8) {
            digit7.style.backgroundImage = "url('images/six.svg')";
        }
        if(initialString.length == 9) {
            digit8.style.backgroundImage = "url('images/six.svg')";
        }
        if(initialString.length == 10) {
            digit9.style.backgroundImage = "url('images/six.svg')";
        }
        if(initialString.length == 11) {
            digit10.style.backgroundImage = "url('images/six.svg')";
        }
        if(initialString.length == 12) {
            digit11.style.backgroundImage = "url('images/six.svg')";
        }
        if(initialString.length == 13) {
            digit12.style.backgroundImage = "url('images/six.svg')";
        }
    }else {
        if(initialString.length == 3) {
            digit1.style.backgroundImage = "url('images/six.svg')"
        }
        if(initialString.length == 4) {
            digit2.style.backgroundImage = "url('images/six.svg')"
        }
        if(initialString.length == 5) {
            digit3.style.backgroundImage = "url('images/six.svg')"
        }
        if(initialString.length == 6) {
            digit4.style.backgroundImage = "url('images/six.svg')"
        }
        if(initialString.length == 7) {
            digit5.style.backgroundImage = "url('images/six.svg')"
        }
        if(initialString.length == 8) {
            digit6.style.backgroundImage = "url('images/six.svg')"
        }
        if(initialString.length == 9) {
            digit7.style.backgroundImage = "url('images/six.svg')"
        }
        if(initialString.length == 10) {
            digit8.style.backgroundImage = "url('images/six.svg')"
        }
        if(initialString.length == 11) {
            digit9.style.backgroundImage = "url('images/six.svg')"
        }
        if(initialString.length == 12) {
            digit10.style.backgroundImage = "url('images/six.svg')"
        }
        if(initialString.length == 13) {
            digit11.style.backgroundImage = "url('images/six.svg')"
        }
        if(initialString.length == 14) {
            digit12.style.backgroundImage = "url('images/six.svg')"
        }
    }
};

button6.addEventListener('click', pressed6);

const pressed7 = () => {
    initialString += '7';
    if(!initialString.includes('.') && !initialString.includes('-')) {
        if(initialString.length == 1) {
            digit1.style.backgroundImage = "url('images/seven.svg')";
        }
        if(initialString.length == 2) {
            digit2.style.backgroundImage = "url('images/seven.svg')";
        }
        if(initialString.length == 3) {
            digit3.style.backgroundImage = "url('images/seven.svg')";
        }
        if(initialString.length == 4) {
            digit4.style.backgroundImage = "url('images/seven.svg')";
        }
        if(initialString.length == 5) {
            digit5.style.backgroundImage = "url('images/seven.svg')";
        }
        if(initialString.length == 6) {
            digit6.style.backgroundImage = "url('images/seven.svg')";
        }
        if(initialString.length == 7) {
            digit7.style.backgroundImage = "url('images/seven.svg')";
        }
        if(initialString.length == 8) {
            digit8.style.backgroundImage = "url('images/seven.svg')";
        }
        if(initialString.length == 9) {
            digit9.style.backgroundImage = "url('images/seven.svg')";
        }
        if(initialString.length == 10) {
            digit10.style.backgroundImage = "url('images/seven.svg')";
        }
        if(initialString.length == 11) {
            digit11.style.backgroundImage = "url('images/seven.svg')";
        }
        if(initialString.length == 12) {
            digit12.style.backgroundImage = "url('images/seven.svg')";
        }  
    }else if(initialString.includes('.') && !initialString.includes('-') || initialString.includes('-') && !initialString.includes('.')) {
        if(initialString.length == 2) {
            digit1.style.backgroundImage = "url('images/seven.svg')";
        }
        if(initialString.length == 3) {
            digit2.style.backgroundImage = "url('images/seven.svg')";
        }
        if(initialString.length == 4) {
            digit3.style.backgroundImage = "url('images/seven.svg')";
        }
        if(initialString.length == 5) {
            digit4.style.backgroundImage = "url('images/seven.svg')";
        }
        if(initialString.length == 6) {
            digit5.style.backgroundImage = "url('images/seven.svg')";
        }
        if(initialString.length == 7) {
            digit6.style.backgroundImage = "url('images/seven.svg')";
        }
        if(initialString.length == 8) {
            digit7.style.backgroundImage = "url('images/seven.svg')";
        }
        if(initialString.length == 9) {
            digit8.style.backgroundImage = "url('images/seven.svg')";
        }
        if(initialString.length == 10) {
            digit9.style.backgroundImage = "url('images/seven.svg')";
        }
        if(initialString.length == 11) {
            digit10.style.backgroundImage = "url('images/seven.svg')";
        }
        if(initialString.length == 12) {
            digit11.style.backgroundImage = "url('images/seven.svg')";
        }
        if(initialString.length == 13) {
            digit12.style.backgroundImage = "url('images/seven.svg')";
        }
    }else {
        if(initialString.length == 3) {
            digit1.style.backgroundImage = "url('images/seven.svg')"
        }
        if(initialString.length == 4) {
            digit2.style.backgroundImage = "url('images/seven.svg')"
        }
        if(initialString.length == 5) {
            digit3.style.backgroundImage = "url('images/seven.svg')"
        }
        if(initialString.length == 6) {
            digit4.style.backgroundImage = "url('images/seven.svg')"
        }
        if(initialString.length == 7) {
            digit5.style.backgroundImage = "url('images/seven.svg')"
        }
        if(initialString.length == 8) {
            digit6.style.backgroundImage = "url('images/seven.svg')"
        }
        if(initialString.length == 9) {
            digit7.style.backgroundImage = "url('images/seven.svg')"
        }
        if(initialString.length == 10) {
            digit8.style.backgroundImage = "url('images/seven.svg')"
        }
        if(initialString.length == 11) {
            digit9.style.backgroundImage = "url('images/seven.svg')"
        }
        if(initialString.length == 12) {
            digit10.style.backgroundImage = "url('images/seven.svg')"
        }
        if(initialString.length == 13) {
            digit11.style.backgroundImage = "url('images/seven.svg')"
        }
        if(initialString.length == 14) {
            digit12.style.backgroundImage = "url('images/seven.svg')"
        }
    }
};

button7.addEventListener('click', pressed7);

const pressed8 = () => {
    initialString += '8';
    if(!initialString.includes('.') && !initialString.includes('-')) {
        if(initialString.length == 1) {
            digit1.style.backgroundImage = "url('images/eight.svg')";
        }
        if(initialString.length == 2) {
            digit2.style.backgroundImage = "url('images/eight.svg')";
        }
        if(initialString.length == 3) {
            digit3.style.backgroundImage = "url('images/eight.svg')";
        }
        if(initialString.length == 4) {
            digit4.style.backgroundImage = "url('images/eight.svg')";
        }
        if(initialString.length == 5) {
            digit5.style.backgroundImage = "url('images/eight.svg')";
        }
        if(initialString.length == 6) {
            digit6.style.backgroundImage = "url('images/eight.svg')";
        }
        if(initialString.length == 7) {
            digit7.style.backgroundImage = "url('images/eight.svg')";
        }
        if(initialString.length == 8) {
            digit8.style.backgroundImage = "url('images/eight.svg')";
        }
        if(initialString.length == 9) {
            digit9.style.backgroundImage = "url('images/eight.svg')";
        }
        if(initialString.length == 10) {
            digit10.style.backgroundImage = "url('images/eight.svg')";
        }
        if(initialString.length == 11) {
            digit11.style.backgroundImage = "url('images/eight.svg')";
        }
        if(initialString.length == 12) {
            digit12.style.backgroundImage = "url('images/eight.svg')";
        }  
    }else if(initialString.includes('.') && !initialString.includes('-') || initialString.includes('-') && !initialString.includes('.')) {
        if(initialString.length == 2) {
            digit1.style.backgroundImage = "url('images/eight.svg')";
        }
        if(initialString.length == 3) {
            digit2.style.backgroundImage = "url('images/eight.svg')";
        }
        if(initialString.length == 4) {
            digit3.style.backgroundImage = "url('images/eight.svg')";
        }
        if(initialString.length == 5) {
            digit4.style.backgroundImage = "url('images/eight.svg')";
        }
        if(initialString.length == 6) {
            digit5.style.backgroundImage = "url('images/eight.svg')";
        }
        if(initialString.length == 7) {
            digit6.style.backgroundImage = "url('images/eight.svg')";
        }
        if(initialString.length == 8) {
            digit7.style.backgroundImage = "url('images/eight.svg')";
        }
        if(initialString.length == 9) {
            digit8.style.backgroundImage = "url('images/eight.svg')";
        }
        if(initialString.length == 10) {
            digit9.style.backgroundImage = "url('images/eight.svg')";
        }
        if(initialString.length == 11) {
            digit10.style.backgroundImage = "url('images/eight.svg')";
        }
        if(initialString.length == 12) {
            digit11.style.backgroundImage = "url('images/eight.svg')";
        }
        if(initialString.length == 13) {
            digit12.style.backgroundImage = "url('images/eight.svg')";
        }
    }else {
        if(initialString.length == 3) {
            digit1.style.backgroundImage = "url('images/eight.svg')"
        }
        if(initialString.length == 4) {
            digit2.style.backgroundImage = "url('images/eight.svg')"
        }
        if(initialString.length == 5) {
            digit3.style.backgroundImage = "url('images/eight.svg')"
        }
        if(initialString.length == 6) {
            digit4.style.backgroundImage = "url('images/eight.svg')"
        }
        if(initialString.length == 7) {
            digit5.style.backgroundImage = "url('images/eight.svg')"
        }
        if(initialString.length == 8) {
            digit6.style.backgroundImage = "url('images/eight.svg')"
        }
        if(initialString.length == 9) {
            digit7.style.backgroundImage = "url('images/eight.svg')"
        }
        if(initialString.length == 10) {
            digit8.style.backgroundImage = "url('images/eight.svg')"
        }
        if(initialString.length == 11) {
            digit9.style.backgroundImage = "url('images/eight.svg')"
        }
        if(initialString.length == 12) {
            digit10.style.backgroundImage = "url('images/eight.svg')"
        }
        if(initialString.length == 13) {
            digit11.style.backgroundImage = "url('images/eight.svg')"
        }
        if(initialString.length == 14) {
            digit12.style.backgroundImage = "url('images/eight.svg')"
        }
    }
};

button8.addEventListener('click', pressed8);

const pressed9 = () => {
    initialString += '9';
    if(!initialString.includes('.') && !initialString.includes('-')) {
        if(initialString.length == 1) {
            digit1.style.backgroundImage = "url('images/nine.svg')";
        }
        if(initialString.length == 2) {
            digit2.style.backgroundImage = "url('images/nine.svg')";
        }
        if(initialString.length == 3) {
            digit3.style.backgroundImage = "url('images/nine.svg')";
        }
        if(initialString.length == 4) {
            digit4.style.backgroundImage = "url('images/nine.svg')";
        }
        if(initialString.length == 5) {
            digit5.style.backgroundImage = "url('images/nine.svg')";
        }
        if(initialString.length == 6) {
            digit6.style.backgroundImage = "url('images/nine.svg')";
        }
        if(initialString.length == 7) {
            digit7.style.backgroundImage = "url('images/nine.svg')";
        }
        if(initialString.length == 8) {
            digit8.style.backgroundImage = "url('images/nine.svg')";
        }
        if(initialString.length == 9) {
            digit9.style.backgroundImage = "url('images/nine.svg')";
        }
        if(initialString.length == 10) {
            digit10.style.backgroundImage = "url('images/nine.svg')";
        }
        if(initialString.length == 11) {
            digit11.style.backgroundImage = "url('images/nine.svg')";
        }
        if(initialString.length == 12) {
            digit12.style.backgroundImage = "url('images/nine.svg')";
        }  
    }else if(initialString.includes('.') && !initialString.includes('-') || initialString.includes('-') && !initialString.includes('.')) {
        if(initialString.length == 2) {
            digit1.style.backgroundImage = "url('images/nine.svg')";
        }
        if(initialString.length == 3) {
            digit2.style.backgroundImage = "url('images/nine.svg')";
        }
        if(initialString.length == 4) {
            digit3.style.backgroundImage = "url('images/nine.svg')";
        }
        if(initialString.length == 5) {
            digit4.style.backgroundImage = "url('images/nine.svg')";
        }
        if(initialString.length == 6) {
            digit5.style.backgroundImage = "url('images/nine.svg')";
        }
        if(initialString.length == 7) {
            digit6.style.backgroundImage = "url('images/nine.svg')";
        }
        if(initialString.length == 8) {
            digit7.style.backgroundImage = "url('images/nine.svg')";
        }
        if(initialString.length == 9) {
            digit8.style.backgroundImage = "url('images/nine.svg')";
        }
        if(initialString.length == 10) {
            digit9.style.backgroundImage = "url('images/nine.svg')";
        }
        if(initialString.length == 11) {
            digit10.style.backgroundImage = "url('images/nine.svg')";
        }
        if(initialString.length == 12) {
            digit11.style.backgroundImage = "url('images/nine.svg')";
        }
        if(initialString.length == 13) {
            digit12.style.backgroundImage = "url('images/nine.svg')";
        }
    }else {
        if(initialString.length == 3) {
            digit1.style.backgroundImage = "url('images/nine.svg')"
        }
        if(initialString.length == 4) {
            digit2.style.backgroundImage = "url('images/nine.svg')"
        }
        if(initialString.length == 5) {
            digit3.style.backgroundImage = "url('images/nine.svg')"
        }
        if(initialString.length == 6) {
            digit4.style.backgroundImage = "url('images/nine.svg')"
        }
        if(initialString.length == 7) {
            digit5.style.backgroundImage = "url('images/nine.svg')"
        }
        if(initialString.length == 8) {
            digit6.style.backgroundImage = "url('images/nine.svg')"
        }
        if(initialString.length == 9) {
            digit7.style.backgroundImage = "url('images/nine.svg')"
        }
        if(initialString.length == 10) {
            digit8.style.backgroundImage = "url('images/nine.svg')"
        }
        if(initialString.length == 11) {
            digit9.style.backgroundImage = "url('images/nine.svg')"
        }
        if(initialString.length == 12) {
            digit10.style.backgroundImage = "url('images/nine.svg')"
        }
        if(initialString.length == 13) {
            digit11.style.backgroundImage = "url('images/nine.svg')"
        }
        if(initialString.length == 14) {
            digit12.style.backgroundImage = "url('images/nine.svg')"
        }
    }
};

button9.addEventListener('click', pressed9);

const pressedPoint = () => {
    if(!initialString.includes('.')) {
        initialString += '.';
        if(!initialString.includes('-')) {
            if(initialString.length == 1) {
                dot1.style.backgroundImage = "url('images/dot.svg')"
            }
            if(initialString.length == 2) {
                dot2.style.backgroundImage = "url('images/dot.svg')"
            }
            if(initialString.length == 3) {
                dot3.style.backgroundImage = "url('images/dot.svg')"
            }
            if(initialString.length == 4) {
                dot4.style.backgroundImage = "url('images/dot.svg')"
            }
            if(initialString.length == 5) {
                dot5.style.backgroundImage = "url('images/dot.svg')"
            }
            if(initialString.length == 6) {
                dot6.style.backgroundImage = "url('images/dot.svg')"
            }
            if(initialString.length == 7) {
                dot7.style.backgroundImage = "url('images/dot.svg')"
            }
            if(initialString.length == 8) {
                dot8.style.backgroundImage = "url('images/dot.svg')"
            }
            if(initialString.length == 9) {
                dot9.style.backgroundImage = "url('images/dot.svg')"
            }
            if(initialString.length == 10) {
                dot10.style.backgroundImage = "url('images/dot.svg')"
            }
            if(initialString.length == 11) {
                dot11.style.backgroundImage = "url('images/dot.svg')"
            }
            if(initialString.length == 12) {
                dot12.style.backgroundImage = "url('images/dot.svg')"
            }
            if(initialString.length == 13) {
                dot13.style.backgroundImage = "url('images/dot.svg')"
            }
        }else {
            if (initialString.length == 2) {
                dot1.style.backgroundImage = "url('images/dot.svg')"
            }
            if (initialString.length == 3) {
                dot2.style.backgroundImage = "url('images/dot.svg')"
            }
            if (initialString.length == 4) {
                dot3.style.backgroundImage = "url('images/dot.svg')"
            }
            if (initialString.length == 5) {
                dot4.style.backgroundImage = "url('images/dot.svg')"
            }
            if (initialString.length == 6) {
                dot5.style.backgroundImage = "url('images/dot.svg')"
            }
            if (initialString.length == 7) {
                dot6.style.backgroundImage = "url('images/dot.svg')"
            }
            if (initialString.length == 8) {
                dot7.style.backgroundImage = "url('images/dot.svg')"
            }
            if (initialString.length == 9) {
                dot8.style.backgroundImage = "url('images/dot.svg')"
            }
            if (initialString.length == 10) {
                dot9.style.backgroundImage = "url('images/dot.svg')"
            }
            if (initialString.length == 11) {
                dot10.style.backgroundImage = "url('images/dot.svg')"
            }
            if (initialString.length == 12) {
                dot11.style.backgroundImage = "url('images/dot.svg')"
            }
            if (initialString.length == 13) {
                dot12.style.backgroundImage = "url('images/dot.svg')"
            }
            if (initialString.length == 14) {
                dot13.style.backgroundImage = "url('images/dot.svg')"
            }
        }

    };
}

buttonPoint.addEventListener('click', pressedPoint);

const pressedMinus = () => {
    if(initialString == '') {
        initialString += '-';
        neg.style.backgroundImage = "url('images/negative.svg')"
    }
}

buttonSubtract.addEventListener('click', pressedMinus);