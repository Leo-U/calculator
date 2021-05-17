const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const power = (a, b) => a ** b;

const operate = function(sign, a, b) {
    if(sign === "+") {
        return (add(a, b));  
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

let sign;
let a;
let b;
let operatorUsed;
let operatorSwitch = 1;

const clearDisplay = () => {
    neg.style.backgroundImage = "url('images/negative-blank.svg')";
    dot1.style.backgroundImage = "url('images/dot-blank.svg')";
    dot2.style.backgroundImage = "url('images/dot-blank.svg')";
    dot3.style.backgroundImage = "url('images/dot-blank.svg')";
    dot4.style.backgroundImage = "url('images/dot-blank.svg')";
    dot5.style.backgroundImage = "url('images/dot-blank.svg')";
    dot6.style.backgroundImage = "url('images/dot-blank.svg')";
    dot7.style.backgroundImage = "url('images/dot-blank.svg')";
    dot8.style.backgroundImage = "url('images/dot-blank.svg')";
    dot9.style.backgroundImage = "url('images/dot-blank.svg')";
    dot10.style.backgroundImage = "url('images/dot-blank.svg')";
    dot11.style.backgroundImage = "url('images/dot-blank.svg')";
    dot12.style.backgroundImage = "url('images/dot-blank.svg')";
    dot13.style.backgroundImage = "url('images/dot-blank.svg')";
    digit1.style.backgroundImage = "url('images/num-blank.svg')";
    digit2.style.backgroundImage = "url('images/num-blank.svg')";
    digit3.style.backgroundImage = "url('images/num-blank.svg')";
    digit4.style.backgroundImage = "url('images/num-blank.svg')";
    digit5.style.backgroundImage = "url('images/num-blank.svg')";
    digit6.style.backgroundImage = "url('images/num-blank.svg')";
    digit7.style.backgroundImage = "url('images/num-blank.svg')";
    digit8.style.backgroundImage = "url('images/num-blank.svg')";
    digit9.style.backgroundImage = "url('images/num-blank.svg')";
    digit10.style.backgroundImage = "url('images/num-blank.svg')";
    digit11.style.backgroundImage = "url('images/num-blank.svg')";
    digit12.style.backgroundImage = "url('images/num-blank.svg')";
    entryString = "";
}

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

let entryString = '';

let toPopulate;

const populate = () => {
    toPopulate = "x" + entryString;
    clearDisplay();
    for (let i = 0; toPopulate.length > 0; i++) {
        toPopulate = toPopulate.slice(1);
        if(toPopulate.charAt(0) === "-") {
            backgroundsForMinus();
        };
        if(toPopulate.charAt(0) === ".") {
            backgroundsForPoint();
        };
        if(toPopulate.charAt(0) === "0") {
            backgroundsFor0();
        };
        if(toPopulate.charAt(0) === "1") {
            backgroundsFor1();
        };
        if(toPopulate.charAt(0) === "2") {
            backgroundsFor2();
        };
        if(toPopulate.charAt(0) === "3") {
            backgroundsFor3();
        };
        if(toPopulate.charAt(0) === "4") {
            backgroundsFor4();
        };
        if(toPopulate.charAt(0) === "5") {
            backgroundsFor5();
        };
        if(toPopulate.charAt(0) === "6") {
            backgroundsFor6();
        };
        if(toPopulate.charAt(0) === "7") {
            backgroundsFor7();
        };
        if(toPopulate.charAt(0) === "8") {
            backgroundsFor8();
        };
        if(toPopulate.charAt(0) === "9") {
            backgroundsFor9();
        };
    };
};

const prepForPopulate = () => {
    if(operatorUsed === true) {
        clearDisplay();
        operatorSwitch = 2;
        operatorUsed = false;
    };
};

const backgroundsFor0 = () => {
    entryString += '0';
    if(!entryString.includes('.') && !entryString.includes('-')) {
        if(entryString.length == 1) {
            digit1.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 2) {
            digit2.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 3) {
            digit3.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 4) {
            digit4.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 5) {
            digit5.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 6) {
            digit6.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 7) {
            digit7.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 8) {
            digit8.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 9) {
            digit9.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 10) {
            digit10.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 11) {
            digit11.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 12) {
            digit12.style.backgroundImage = "url('images/zero.svg')";
        }  
    }else if(entryString.includes('.') && !entryString.includes('-') || entryString.includes('-') && !entryString.includes('.')) {
        if(entryString.length == 2) {
            digit1.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 3) {
            digit2.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 4) {
            digit3.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 5) {
            digit4.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 6) {
            digit5.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 7) {
            digit6.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 8) {
            digit7.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 9) {
            digit8.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 10) {
            digit9.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 11) {
            digit10.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 12) {
            digit11.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 13) {
            digit12.style.backgroundImage = "url('images/zero.svg')";
        }
    }else {
        if(entryString.length == 3) {
            digit1.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 4) {
            digit2.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 5) {
            digit3.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 6) {
            digit4.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 7) {
            digit5.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 8) {
            digit6.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 9) {
            digit7.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 10) {
            digit8.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 11) {
            digit9.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 12) {
            digit10.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 13) {
            digit11.style.backgroundImage = "url('images/zero.svg')";
        }
        if(entryString.length == 14) {
            digit12.style.backgroundImage = "url('images/zero.svg')";
        }
    }
}
const pressed0 = () => {
    prepForPopulate();
    backgroundsFor0();
};

button0.addEventListener('click', pressed0);

const backgroundsFor1 = () => {
    entryString += '1';
    if(!entryString.includes('.') && !entryString.includes('-')) {
        if(entryString.length == 1) {
            digit1.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 2) {
            digit2.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 3) {
            digit3.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 4) {
            digit4.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 5) {
            digit5.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 6) {
            digit6.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 7) {
            digit7.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 8) {
            digit8.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 9) {
            digit9.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 10) {
            digit10.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 11) {
            digit11.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 12) {
            digit12.style.backgroundImage = "url('images/one.svg')";
        }  
    }else if(entryString.includes('.') && !entryString.includes('-') || entryString.includes('-') && !entryString.includes('.')) {
        if(entryString.length == 2) {
            digit1.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 3) {
            digit2.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 4) {
            digit3.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 5) {
            digit4.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 6) {
            digit5.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 7) {
            digit6.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 8) {
            digit7.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 9) {
            digit8.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 10) {
            digit9.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 11) {
            digit10.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 12) {
            digit11.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 13) {
            digit12.style.backgroundImage = "url('images/one.svg')";
        }
    }else {
        if(entryString.length == 3) {
            digit1.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 4) {
            digit2.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 5) {
            digit3.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 6) {
            digit4.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 7) {
            digit5.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 8) {
            digit6.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 9) {
            digit7.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 10) {
            digit8.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 11) {
            digit9.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 12) {
            digit10.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 13) {
            digit11.style.backgroundImage = "url('images/one.svg')";
        }
        if(entryString.length == 14) {
            digit12.style.backgroundImage = "url('images/one.svg')";
        }
    }
}

const pressed1 = () => {
    prepForPopulate();
    backgroundsFor1();
};

button1.addEventListener('click', pressed1);

const backgroundsFor2 = () => {
    entryString += '2';
    if(!entryString.includes('.') && !entryString.includes('-')) {
        if(entryString.length == 1) {
            digit1.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 2) {
            digit2.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 3) {
            digit3.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 4) {
            digit4.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 5) {
            digit5.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 6) {
            digit6.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 7) {
            digit7.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 8) {
            digit8.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 9) {
            digit9.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 10) {
            digit10.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 11) {
            digit11.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 12) {
            digit12.style.backgroundImage = "url('images/two.svg')";
        }  
    }else if(entryString.includes('.') && !entryString.includes('-') || entryString.includes('-') && !entryString.includes('.')) {
        if(entryString.length == 2) {
            digit1.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 3) {
            digit2.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 4) {
            digit3.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 5) {
            digit4.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 6) {
            digit5.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 7) {
            digit6.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 8) {
            digit7.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 9) {
            digit8.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 10) {
            digit9.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 11) {
            digit10.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 12) {
            digit11.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 13) {
            digit12.style.backgroundImage = "url('images/two.svg')";
        }
    }else {
        if(entryString.length == 3) {
            digit1.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 4) {
            digit2.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 5) {
            digit3.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 6) {
            digit4.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 7) {
            digit5.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 8) {
            digit6.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 9) {
            digit7.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 10) {
            digit8.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 11) {
            digit9.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 12) {
            digit10.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 13) {
            digit11.style.backgroundImage = "url('images/two.svg')";
        }
        if(entryString.length == 14) {
            digit12.style.backgroundImage = "url('images/two.svg')";
        }
    }
}
const pressed2 = () => {
    prepForPopulate();
    backgroundsFor2();
};

button2.addEventListener('click', pressed2);

const backgroundsFor3 = () => {
    entryString += '3';
    if(!entryString.includes('.') && !entryString.includes('-')) {
        if(entryString.length == 1) {
            digit1.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 2) {
            digit2.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 3) {
            digit3.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 4) {
            digit4.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 5) {
            digit5.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 6) {
            digit6.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 7) {
            digit7.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 8) {
            digit8.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 9) {
            digit9.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 10) {
            digit10.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 11) {
            digit11.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 12) {
            digit12.style.backgroundImage = "url('images/three.svg')";
        }  
    }else if(entryString.includes('.') && !entryString.includes('-') || entryString.includes('-') && !entryString.includes('.')) {
        if(entryString.length == 2) {
            digit1.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 3) {
            digit2.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 4) {
            digit3.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 5) {
            digit4.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 6) {
            digit5.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 7) {
            digit6.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 8) {
            digit7.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 9) {
            digit8.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 10) {
            digit9.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 11) {
            digit10.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 12) {
            digit11.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 13) {
            digit12.style.backgroundImage = "url('images/three.svg')";
        }
    }else {
        if(entryString.length == 3) {
            digit1.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 4) {
            digit2.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 5) {
            digit3.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 6) {
            digit4.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 7) {
            digit5.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 8) {
            digit6.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 9) {
            digit7.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 10) {
            digit8.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 11) {
            digit9.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 12) {
            digit10.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 13) {
            digit11.style.backgroundImage = "url('images/three.svg')";
        }
        if(entryString.length == 14) {
            digit12.style.backgroundImage = "url('images/three.svg')";
        }
    }
}
const pressed3 = () => {
    prepForPopulate();
    backgroundsFor3();
};

button3.addEventListener('click', pressed3);

const backgroundsFor4 = () => {
    entryString += '4';
    if(!entryString.includes('.') && !entryString.includes('-')) {
        if(entryString.length == 1) {
            digit1.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 2) {
            digit2.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 3) {
            digit3.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 4) {
            digit4.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 5) {
            digit5.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 6) {
            digit6.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 7) {
            digit7.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 8) {
            digit8.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 9) {
            digit9.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 10) {
            digit10.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 11) {
            digit11.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 12) {
            digit12.style.backgroundImage = "url('images/four.svg')";
        }  
    }else if(entryString.includes('.') && !entryString.includes('-') || entryString.includes('-') && !entryString.includes('.')) {
        if(entryString.length == 2) {
            digit1.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 3) {
            digit2.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 4) {
            digit3.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 5) {
            digit4.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 6) {
            digit5.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 7) {
            digit6.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 8) {
            digit7.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 9) {
            digit8.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 10) {
            digit9.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 11) {
            digit10.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 12) {
            digit11.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 13) {
            digit12.style.backgroundImage = "url('images/four.svg')";
        }
    }else {
        if(entryString.length == 3) {
            digit1.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 4) {
            digit2.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 5) {
            digit3.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 6) {
            digit4.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 7) {
            digit5.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 8) {
            digit6.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 9) {
            digit7.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 10) {
            digit8.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 11) {
            digit9.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 12) {
            digit10.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 13) {
            digit11.style.backgroundImage = "url('images/four.svg')";
        }
        if(entryString.length == 14) {
            digit12.style.backgroundImage = "url('images/four.svg')";
        }
    }
}
const pressed4 = () => {
    prepForPopulate();
    backgroundsFor4();
};

button4.addEventListener('click', pressed4);

const backgroundsFor5 = () => {
    entryString += '5';
    if(!entryString.includes('.') && !entryString.includes('-')) {
        if(entryString.length == 1) {
            digit1.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 2) {
            digit2.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 3) {
            digit3.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 4) {
            digit4.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 5) {
            digit5.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 6) {
            digit6.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 7) {
            digit7.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 8) {
            digit8.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 9) {
            digit9.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 10) {
            digit10.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 11) {
            digit11.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 12) {
            digit12.style.backgroundImage = "url('images/five.svg')";
        }  
    }else if(entryString.includes('.') && !entryString.includes('-') || entryString.includes('-') && !entryString.includes('.')) {
        if(entryString.length == 2) {
            digit1.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 3) {
            digit2.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 4) {
            digit3.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 5) {
            digit4.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 6) {
            digit5.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 7) {
            digit6.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 8) {
            digit7.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 9) {
            digit8.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 10) {
            digit9.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 11) {
            digit10.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 12) {
            digit11.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 13) {
            digit12.style.backgroundImage = "url('images/five.svg')";
        }
    }else {
        if(entryString.length == 3) {
            digit1.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 4) {
            digit2.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 5) {
            digit3.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 6) {
            digit4.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 7) {
            digit5.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 8) {
            digit6.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 9) {
            digit7.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 10) {
            digit8.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 11) {
            digit9.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 12) {
            digit10.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 13) {
            digit11.style.backgroundImage = "url('images/five.svg')";
        }
        if(entryString.length == 14) {
            digit12.style.backgroundImage = "url('images/five.svg')";
        }
    }
}
const pressed5 = () => {
    prepForPopulate();
    backgroundsFor5();
};

button5.addEventListener('click', pressed5);

const backgroundsFor6 = () => {
    entryString += '6';
    if(!entryString.includes('.') && !entryString.includes('-')) {
        if(entryString.length == 1) {
            digit1.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 2) {
            digit2.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 3) {
            digit3.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 4) {
            digit4.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 5) {
            digit5.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 6) {
            digit6.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 7) {
            digit7.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 8) {
            digit8.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 9) {
            digit9.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 10) {
            digit10.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 11) {
            digit11.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 12) {
            digit12.style.backgroundImage = "url('images/six.svg')";
        }  
    }else if(entryString.includes('.') && !entryString.includes('-') || entryString.includes('-') && !entryString.includes('.')) {
        if(entryString.length == 2) {
            digit1.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 3) {
            digit2.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 4) {
            digit3.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 5) {
            digit4.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 6) {
            digit5.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 7) {
            digit6.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 8) {
            digit7.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 9) {
            digit8.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 10) {
            digit9.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 11) {
            digit10.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 12) {
            digit11.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 13) {
            digit12.style.backgroundImage = "url('images/six.svg')";
        }
    }else {
        if(entryString.length == 3) {
            digit1.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 4) {
            digit2.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 5) {
            digit3.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 6) {
            digit4.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 7) {
            digit5.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 8) {
            digit6.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 9) {
            digit7.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 10) {
            digit8.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 11) {
            digit9.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 12) {
            digit10.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 13) {
            digit11.style.backgroundImage = "url('images/six.svg')";
        }
        if(entryString.length == 14) {
            digit12.style.backgroundImage = "url('images/six.svg')";
        }
    }
}

const pressed6 = () => {
    prepForPopulate();
    backgroundsFor6();
};

button6.addEventListener('click', pressed6);

const backgroundsFor7 = () => {
    entryString += '7';
    if(!entryString.includes('.') && !entryString.includes('-')) {
        if(entryString.length == 1) {
            digit1.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 2) {
            digit2.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 3) {
            digit3.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 4) {
            digit4.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 5) {
            digit5.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 6) {
            digit6.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 7) {
            digit7.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 8) {
            digit8.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 9) {
            digit9.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 10) {
            digit10.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 11) {
            digit11.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 12) {
            digit12.style.backgroundImage = "url('images/seven.svg')";
        }  
    }else if(entryString.includes('.') && !entryString.includes('-') || entryString.includes('-') && !entryString.includes('.')) {
        if(entryString.length == 2) {
            digit1.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 3) {
            digit2.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 4) {
            digit3.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 5) {
            digit4.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 6) {
            digit5.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 7) {
            digit6.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 8) {
            digit7.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 9) {
            digit8.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 10) {
            digit9.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 11) {
            digit10.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 12) {
            digit11.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 13) {
            digit12.style.backgroundImage = "url('images/seven.svg')";
        }
    }else {
        if(entryString.length == 3) {
            digit1.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 4) {
            digit2.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 5) {
            digit3.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 6) {
            digit4.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 7) {
            digit5.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 8) {
            digit6.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 9) {
            digit7.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 10) {
            digit8.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 11) {
            digit9.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 12) {
            digit10.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 13) {
            digit11.style.backgroundImage = "url('images/seven.svg')";
        }
        if(entryString.length == 14) {
            digit12.style.backgroundImage = "url('images/seven.svg')";
        }
    }
}
const pressed7 = () => {
    prepForPopulate();
    backgroundsFor7();
};

button7.addEventListener('click', pressed7);

const backgroundsFor8 = () => {
    entryString += '8';
    if(!entryString.includes('.') && !entryString.includes('-')) {
        if(entryString.length == 1) {
            digit1.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 2) {
            digit2.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 3) {
            digit3.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 4) {
            digit4.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 5) {
            digit5.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 6) {
            digit6.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 7) {
            digit7.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 8) {
            digit8.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 9) {
            digit9.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 10) {
            digit10.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 11) {
            digit11.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 12) {
            digit12.style.backgroundImage = "url('images/eight.svg')";
        }  
    }else if(entryString.includes('.') && !entryString.includes('-') || entryString.includes('-') && !entryString.includes('.')) {
        if(entryString.length == 2) {
            digit1.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 3) {
            digit2.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 4) {
            digit3.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 5) {
            digit4.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 6) {
            digit5.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 7) {
            digit6.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 8) {
            digit7.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 9) {
            digit8.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 10) {
            digit9.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 11) {
            digit10.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 12) {
            digit11.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 13) {
            digit12.style.backgroundImage = "url('images/eight.svg')";
        }
    }else {
        if(entryString.length == 3) {
            digit1.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 4) {
            digit2.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 5) {
            digit3.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 6) {
            digit4.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 7) {
            digit5.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 8) {
            digit6.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 9) {
            digit7.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 10) {
            digit8.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 11) {
            digit9.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 12) {
            digit10.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 13) {
            digit11.style.backgroundImage = "url('images/eight.svg')";
        }
        if(entryString.length == 14) {
            digit12.style.backgroundImage = "url('images/eight.svg')";
        }
    }
}
const pressed8 = () => {
    prepForPopulate();
    backgroundsFor8();
};

button8.addEventListener('click', pressed8);

const backgroundsFor9 = () => {
    entryString += '9';
    if(!entryString.includes('.') && !entryString.includes('-')) {
        if(entryString.length == 1) {
            digit1.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 2) {
            digit2.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 3) {
            digit3.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 4) {
            digit4.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 5) {
            digit5.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 6) {
            digit6.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 7) {
            digit7.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 8) {
            digit8.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 9) {
            digit9.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 10) {
            digit10.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 11) {
            digit11.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 12) {
            digit12.style.backgroundImage = "url('images/nine.svg')";
        }  
    }else if(entryString.includes('.') && !entryString.includes('-') || entryString.includes('-') && !entryString.includes('.')) {
        if(entryString.length == 2) {
            digit1.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 3) {
            digit2.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 4) {
            digit3.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 5) {
            digit4.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 6) {
            digit5.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 7) {
            digit6.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 8) {
            digit7.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 9) {
            digit8.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 10) {
            digit9.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 11) {
            digit10.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 12) {
            digit11.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 13) {
            digit12.style.backgroundImage = "url('images/nine.svg')";
        }
    }else {
        if(entryString.length == 3) {
            digit1.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 4) {
            digit2.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 5) {
            digit3.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 6) {
            digit4.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 7) {
            digit5.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 8) {
            digit6.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 9) {
            digit7.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 10) {
            digit8.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 11) {
            digit9.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 12) {
            digit10.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 13) {
            digit11.style.backgroundImage = "url('images/nine.svg')";
        }
        if(entryString.length == 14) {
            digit12.style.backgroundImage = "url('images/nine.svg')";
        }
    }
}
const pressed9 = () => {
    prepForPopulate();
    backgroundsFor9();
};

button9.addEventListener('click', pressed9);

const backgroundsForPoint = () => {
    if(!entryString.includes('.')) {
        entryString += '.';
        if(!entryString.includes('-')) {
            if(entryString.length == 1) {
                dot1.style.backgroundImage = "url('images/dot.svg')";
            }
            if(entryString.length == 2) {
                dot2.style.backgroundImage = "url('images/dot.svg')";
            }
            if(entryString.length == 3) {
                dot3.style.backgroundImage = "url('images/dot.svg')";
            }
            if(entryString.length == 4) {
                dot4.style.backgroundImage = "url('images/dot.svg')";
            }
            if(entryString.length == 5) {
                dot5.style.backgroundImage = "url('images/dot.svg')";
            }
            if(entryString.length == 6) {
                dot6.style.backgroundImage = "url('images/dot.svg')";
            }
            if(entryString.length == 7) {
                dot7.style.backgroundImage = "url('images/dot.svg')";
            }
            if(entryString.length == 8) {
                dot8.style.backgroundImage = "url('images/dot.svg')";
            }
            if(entryString.length == 9) {
                dot9.style.backgroundImage = "url('images/dot.svg')";
            }
            if(entryString.length == 10) {
                dot10.style.backgroundImage = "url('images/dot.svg')";
            }
            if(entryString.length == 11) {
                dot11.style.backgroundImage = "url('images/dot.svg')";
            }
            if(entryString.length == 12) {
                dot12.style.backgroundImage = "url('images/dot.svg')";
            }
            if(entryString.length == 13) {
                dot13.style.backgroundImage = "url('images/dot.svg')";
            }
        }else {
            if (entryString.length == 2) {
                dot1.style.backgroundImage = "url('images/dot.svg')";
            }
            if (entryString.length == 3) {
                dot2.style.backgroundImage = "url('images/dot.svg')";
            }
            if (entryString.length == 4) {
                dot3.style.backgroundImage = "url('images/dot.svg')";
            }
            if (entryString.length == 5) {
                dot4.style.backgroundImage = "url('images/dot.svg')";
            }
            if (entryString.length == 6) {
                dot5.style.backgroundImage = "url('images/dot.svg')";
            }
            if (entryString.length == 7) {
                dot6.style.backgroundImage = "url('images/dot.svg')";
            }
            if (entryString.length == 8) {
                dot7.style.backgroundImage = "url('images/dot.svg')";
            }
            if (entryString.length == 9) {
                dot8.style.backgroundImage = "url('images/dot.svg')";
            }
            if (entryString.length == 10) {
                dot9.style.backgroundImage = "url('images/dot.svg')";
            }
            if (entryString.length == 11) {
                dot10.style.backgroundImage = "url('images/dot.svg')";
            }
            if (entryString.length == 12) {
                dot11.style.backgroundImage = "url('images/dot.svg')";
            }
            if (entryString.length == 13) {
                dot12.style.backgroundImage = "url('images/dot.svg')";
            }
            if (entryString.length == 14) {
                dot13.style.backgroundImage = "url('images/dot.svg')";
            };
        };

    };
}
const pressedPoint = () => {
    backgroundsForPoint();
}

buttonPoint.addEventListener('click', pressedPoint);

const calculate = () => {
    operatorUsed = true;
    if(operatorSwitch == 1) {
        a = parseFloat(entryString);
    }else if(operatorSwitch == 2) {
        b = parseFloat(entryString);
        entryString = operate(sign, a, b);
        console.log(entryString);
        a = parseFloat(entryString);
        populate();
    }
}

const pressedPlus = () => {
    calculate();
    sign = "+";
}

buttonAdd.addEventListener('click', pressedPlus);


const backgroundsForMinus = () => {
    if(entryString == '') {
        entryString += '-';
        neg.style.backgroundImage = "url('images/negative.svg')";
        negSwitch = 2;
    }
}

let negSwitch = 1;

const pressedMinus = () => {
    backgroundsForMinus();
    if(negSwitch !== 2) {
        calculate();
        sign = "-";   
        negSwitch = 1;   
    };
}

buttonSubtract.addEventListener('click', pressedMinus);

const pressedMultiply = () => {
    calculate();
    sign = "*";
}

buttonMultiply.addEventListener('click', pressedMultiply);

const pressedDivide = () => {
    calculate();
    sign = "/";
}

buttonDivide.addEventListener('click', pressedDivide);

const pressedPower = () => {
    calculate();
    sign = "**";
}

buttonPower.addEventListener('click', pressedPower);

const pressedEnter = () => {
    b = parseFloat(entryString);
    console.log(operate(sign, a, b));
    entryString = operate(sign, a, b);
    populate();
}

buttonEnter.addEventListener('click', pressedEnter);