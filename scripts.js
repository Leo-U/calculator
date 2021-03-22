const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const power = (a, b) => a ** b;

const operate = function(sign, a, b) {
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

let entryString = '';



//styling event listeners

const firstChar = document.querySelector('#first-char');
const secondChar = document.querySelector('#second-char');
const thirdChar = document.querySelector('#third-char');
const fourthChar = document.querySelector('#fourth-char');
const fifthChar = document.querySelector('#fifth-char');
const sixthChar = document.querySelector('#sixth-char');
const seventhChar = document.querySelector('#seventh-char');
const eighthChar = document.querySelector('#eighth-char');
const ninthChar = document.querySelector('#ninth-char');
const tenthChar = document.querySelector('#tenth-char');
const eleventhChar = document.querySelector('#eleventh-char');
const twelfthChar = document.querySelector('#twelfth-char');

const button7 = document.querySelector('#button-7');
const pressed7 = () => {
    button7.style.background = 'url(images/7-pressed.png)';
    button7.style.backgroundRepeat = 'no-repeat';
    entryString = entryString + "7";

    if (entryString.charAt(entryString.length-1) == "7") {
        if(entryString.length == 1) {
            firstChar.style.backgroundImage = "url('images/seven.svg')";
        };
        if(entryString.length == 2) {
            thirdChar.style.backgroundImage = "url('images/seven.svg')";
        };
        if(entryString.length == 3 && !entryString.includes('.')) {
            fifthChar.style.backgroundImage = "url('images/seven.svg')";
        };
        if(entryString.length == 3 && entryString.includes('.')) {
            thirdChar.style.backgroundImage = "url('images/seven.svg')";
        };
        if(entryString.length == 4 && !entryString.includes('.')) {
            seventhChar.style.backgroundImage = "url('images/seven.svg')";
        };
        if(entryString.length == 4 && entryString.includes('.')) {
            fifthChar.style.backgroundImage = "url('images/seven.svg')";
        };
        if(entryString.length == 5 && !entryString.includes('.')) {
            ninthChar.style.backgroundImage = "url('images/seven.svg')";
        };
        if(entryString.length == 5 && entryString.includes('.')) {
            seventhChar.style.backgroundImage = "url('images/seven.svg')";
        };
        if(entryString.length == 6 && !entryString.includes('.')) {
            eleventhChar.style.backgroundImage = "url('images/seven.svg')";
        };
        if(entryString.length == 6 && entryString.includes('.')) {
            ninthChar.style.backgroundImage = "url('images/seven.svg')";
        };
        if(entryString.length == 7 && entryString.includes('.')) {
            eleventhChar.style.backgroundImage = "url('images/seven.svg')";
        };
    }
};
const unpressed7 = () => {
    button7.style.background = 'url(images/7.png)';
    button7.style.backgroundRepeat = 'no-repeat';
}
button7.addEventListener('mousedown', pressed7);
button7.addEventListener('mouseup', unpressed7);
document.addEventListener("keydown", function(event) {
    if (event.key == '7') {
      pressed7();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == '7') {
      unpressed7();
    }
});

const button8 = document.querySelector('#button-8');
const pressed8 = () => {
    button8.style.background = 'url(images/8-pressed.png)';
    button8.style.backgroundRepeat = 'no-repeat';
    entryString = entryString + "8";
    
    if (entryString.charAt(entryString.length-1) == "8") {
        if(entryString.length == 1) {
            firstChar.style.backgroundImage = "url('images/eight.svg')";
        };
        if(entryString.length == 2) {
            thirdChar.style.backgroundImage = "url('images/eight.svg')";
        };
        if(entryString.length == 3 && !entryString.includes('.')) {
            fifthChar.style.backgroundImage = "url('images/eight.svg')";
        };
        if(entryString.length == 3 && entryString.includes('.')) {
            thirdChar.style.backgroundImage = "url('images/eight.svg')";
        };
        if(entryString.length == 4 && !entryString.includes('.')) {
            seventhChar.style.backgroundImage = "url('images/eight.svg')";
        };
        if(entryString.length == 4 && entryString.includes('.')) {
            fifthChar.style.backgroundImage = "url('images/eight.svg')";
        };
        if(entryString.length == 5 && !entryString.includes('.')) {
            ninthChar.style.backgroundImage = "url('images/eight.svg')";
        };
        if(entryString.length == 5 && entryString.includes('.')) {
            seventhChar.style.backgroundImage = "url('images/eight.svg')";
        };
        if(entryString.length == 6 && !entryString.includes('.')) {
            eleventhChar.style.backgroundImage = "url('images/eight.svg')";
        };
        if(entryString.length == 6 && entryString.includes('.')) {
            ninthChar.style.backgroundImage = "url('images/eight.svg')";
        };
        if(entryString.length == 7 && entryString.includes('.')) {
            eleventhChar.style.backgroundImage = "url('images/eight.svg')";
        };
    }
};
const unpressed8 = () => {
    button8.style.background = 'url(images/8.png)';
    button8.style.backgroundRepeat = 'no-repeat';
}
button8.addEventListener('mousedown', pressed8);
button8.addEventListener('mouseup', unpressed8);
document.addEventListener("keydown", function(event) {
    if (event.key == '8') {
      pressed8();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == '8') {
      unpressed8();
    }
});

const button9 = document.querySelector('#button-9');
const pressed9 = () => {
    button9.style.background = 'url(images/9-pressed.png)';
    button9.style.backgroundRepeat = 'no-repeat';
    entryString = entryString + "9";

    if (entryString.charAt(entryString.length-1) == "9") {
        if(entryString.length == 1) {
            firstChar.style.backgroundImage = "url('images/nine.svg')";
        };
        if(entryString.length == 2) {
            thirdChar.style.backgroundImage = "url('images/nine.svg')";
        };
        if(entryString.length == 3 && !entryString.includes('.')) {
            fifthChar.style.backgroundImage = "url('images/nine.svg')";
        };
        if(entryString.length == 3 && entryString.includes('.')) {
            thirdChar.style.backgroundImage = "url('images/nine.svg')";
        };
        if(entryString.length == 4 && !entryString.includes('.')) {
            seventhChar.style.backgroundImage = "url('images/nine.svg')";
        };
        if(entryString.length == 4 && entryString.includes('.')) {
            fifthChar.style.backgroundImage = "url('images/nine.svg')";
        };
        if(entryString.length == 5 && !entryString.includes('.')) {
            ninthChar.style.backgroundImage = "url('images/nine.svg')";
        };
        if(entryString.length == 5 && entryString.includes('.')) {
            seventhChar.style.backgroundImage = "url('images/nine.svg')";
        };
        if(entryString.length == 6 && !entryString.includes('.')) {
            eleventhChar.style.backgroundImage = "url('images/nine.svg')";
        };
        if(entryString.length == 6 && entryString.includes('.')) {
            ninthChar.style.backgroundImage = "url('images/nine.svg')";
        };
        if(entryString.length == 7 && entryString.includes('.')) {
            eleventhChar.style.backgroundImage = "url('images/nine.svg')";
        };
    }
};
const unpressed9 = () => {
    button9.style.background = 'url(images/9.png)';
    button9.style.backgroundRepeat = 'no-repeat';
}
button9.addEventListener('mousedown', pressed9);
button9.addEventListener('mouseup', unpressed9);
document.addEventListener("keydown", function(event) {
    if (event.key == '9') {
      pressed9();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == '9') {
      unpressed9();
    }
});

const buttonDivide = document.querySelector('#button-divide');
const pressedDivide = () => {
    buttonDivide.style.background = 'url(images/divide-pressed.png)';
    buttonDivide.style.backgroundRepeat = 'no-repeat';
    
};
const unpressedDivide = () => {
    buttonDivide.style.background = 'url(images/divide.png)';
    buttonDivide.style.backgroundRepeat = 'no-repeat';
}
buttonDivide.addEventListener('mousedown', pressedDivide);
buttonDivide.addEventListener('mouseup', unpressedDivide);
document.addEventListener("keydown", function(event) {
    if (event.key == '/') {
      pressedDivide();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == '/') {
      unpressedDivide();
    }
});

const button4 = document.querySelector('#button-4');
const pressed4 = () => {
    button4.style.background = 'url(images/4-pressed.png)';
    button4.style.backgroundRepeat = 'no-repeat';
    entryString = entryString + "4";

    if (entryString.charAt(entryString.length-1) == "4") {
        if(entryString.length == 1) {
            firstChar.style.backgroundImage = "url('images/four.svg')";
        };
        if(entryString.length == 2) {
            thirdChar.style.backgroundImage = "url('images/four.svg')";
        };
        if(entryString.length == 3 && !entryString.includes('.')) {
            fifthChar.style.backgroundImage = "url('images/four.svg')";
        };
        if(entryString.length == 3 && entryString.includes('.')) {
            thirdChar.style.backgroundImage = "url('images/four.svg')";
        };
        if(entryString.length == 4 && !entryString.includes('.')) {
            seventhChar.style.backgroundImage = "url('images/four.svg')";
        };
        if(entryString.length == 4 && entryString.includes('.')) {
            fifthChar.style.backgroundImage = "url('images/four.svg')";
        };
        if(entryString.length == 5 && !entryString.includes('.')) {
            ninthChar.style.backgroundImage = "url('images/four.svg')";
        };
        if(entryString.length == 5 && entryString.includes('.')) {
            seventhChar.style.backgroundImage = "url('images/four.svg')";
        };
        if(entryString.length == 6 && !entryString.includes('.')) {
            eleventhChar.style.backgroundImage = "url('images/four.svg')";
        };
        if(entryString.length == 6 && entryString.includes('.')) {
            ninthChar.style.backgroundImage = "url('images/four.svg')";
        };
        if(entryString.length == 7 && entryString.includes('.')) {
            eleventhChar.style.backgroundImage = "url('images/four.svg')";
        };
    }
};
const unpressed4 = () => {
    button4.style.background = 'url(images/4.png)';
    button4.style.backgroundRepeat = 'no-repeat';
}
button4.addEventListener('mousedown', pressed4);
button4.addEventListener('mouseup', unpressed4);
document.addEventListener("keydown", function(event) {
    if (event.key == '4') {
      pressed4();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == '4') {
      unpressed4();
    }
});

const button5 = document.querySelector('#button-5');
const pressed5 = () => {
    button5.style.background = 'url(images/5-pressed.png)';
    button5.style.backgroundRepeat = 'no-repeat';
    entryString = entryString + "5";
    
    if (entryString.charAt(entryString.length-1) == "5") {
        if(entryString.length == 1) {
            firstChar.style.backgroundImage = "url('images/five.svg')";
        };
        if(entryString.length == 2) {
            thirdChar.style.backgroundImage = "url('images/five.svg')";
        };
        if(entryString.length == 3 && !entryString.includes('.')) {
            fifthChar.style.backgroundImage = "url('images/five.svg')";
        };
        if(entryString.length == 3 && entryString.includes('.')) {
            thirdChar.style.backgroundImage = "url('images/five.svg')";
        };
        if(entryString.length == 4 && !entryString.includes('.')) {
            seventhChar.style.backgroundImage = "url('images/five.svg')";
        };
        if(entryString.length == 4 && entryString.includes('.')) {
            fifthChar.style.backgroundImage = "url('images/five.svg')";
        };
        if(entryString.length == 5 && !entryString.includes('.')) {
            ninthChar.style.backgroundImage = "url('images/five.svg')";
        };
        if(entryString.length == 5 && entryString.includes('.')) {
            seventhChar.style.backgroundImage = "url('images/five.svg')";
        };
        if(entryString.length == 6 && !entryString.includes('.')) {
            eleventhChar.style.backgroundImage = "url('images/five.svg')";
        };
        if(entryString.length == 6 && entryString.includes('.')) {
            ninthChar.style.backgroundImage = "url('images/five.svg')";
        };
        if(entryString.length == 7 && entryString.includes('.')) {
            eleventhChar.style.backgroundImage = "url('images/five.svg')";
        };
    }
};
const unpressed5 = () => {
    button5.style.background = 'url(images/5.png)';
    button5.style.backgroundRepeat = 'no-repeat';
}
button5.addEventListener('mousedown', pressed5);
button5.addEventListener('mouseup', unpressed5);
document.addEventListener("keydown", function(event) {
    if (event.key == '5') {
      pressed5();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == '5') {
      unpressed5();
    }
});

const button6 = document.querySelector('#button-6');
const pressed6 = () => {
    button6.style.background = 'url(images/6-pressed.png)';
    button6.style.backgroundRepeat = 'no-repeat';
    entryString = entryString + "6";
    
    if (entryString.charAt(entryString.length-1) == "6") {
        if(entryString.length == 1) {
            firstChar.style.backgroundImage = "url('images/six.svg')";
        };
        if(entryString.length == 2) {
            thirdChar.style.backgroundImage = "url('images/six.svg')";
        };
        if(entryString.length == 3 && !entryString.includes('.')) {
            fifthChar.style.backgroundImage = "url('images/six.svg')";
        };
        if(entryString.length == 3 && entryString.includes('.')) {
            thirdChar.style.backgroundImage = "url('images/six.svg')";
        };
        if(entryString.length == 4 && !entryString.includes('.')) {
            seventhChar.style.backgroundImage = "url('images/six.svg')";
        };
        if(entryString.length == 4 && entryString.includes('.')) {
            fifthChar.style.backgroundImage = "url('images/six.svg')";
        };
        if(entryString.length == 5 && !entryString.includes('.')) {
            ninthChar.style.backgroundImage = "url('images/six.svg')";
        };
        if(entryString.length == 5 && entryString.includes('.')) {
            seventhChar.style.backgroundImage = "url('images/six.svg')";
        };
        if(entryString.length == 6 && !entryString.includes('.')) {
            eleventhChar.style.backgroundImage = "url('images/six.svg')";
        };
        if(entryString.length == 6 && entryString.includes('.')) {
            ninthChar.style.backgroundImage = "url('images/six.svg')";
        };
        if(entryString.length == 7 && entryString.includes('.')) {
            eleventhChar.style.backgroundImage = "url('images/six.svg')";
        };
    }
};
const unpressed6 = () => {
    button6.style.background = 'url(images/6.png)';
    button6.style.backgroundRepeat = 'no-repeat';
}
button6.addEventListener('mousedown', pressed6);
button6.addEventListener('mouseup', unpressed6);
document.addEventListener("keydown", function(event) {
    if (event.key == '6') {
      pressed6();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == '6') {
      unpressed6();
    }
});
const buttonMultiply = document.querySelector('#button-multiply');
const pressedMultiply = () => {
    buttonMultiply.style.background = 'url(images/multiply-pressed.png)';
    buttonMultiply.style.backgroundRepeat = 'no-repeat';
    
};
const unpressedMultiply = () => {
    buttonMultiply.style.background = 'url(images/multiply.png)';
    buttonMultiply.style.backgroundRepeat = 'no-repeat';
}
buttonMultiply.addEventListener('mousedown', pressedMultiply);
buttonMultiply.addEventListener('mouseup', unpressedMultiply);
document.addEventListener("keydown", function(event) {
    if (event.key == '*') {
      pressedMultiply();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == '*') {
      unpressedMultiply();
    }
});

const button1 = document.querySelector('#button-1');
const pressed1 = () => {
    button1.style.background = 'url(images/1-pressed.png)';
    button1.style.backgroundRepeat = 'no-repeat';
    entryString = entryString + "1";
    
    if (entryString.charAt(entryString.length-1) == "1") {
        if(entryString.length == 1) {
            firstChar.style.backgroundImage = "url('images/one.svg')";
        };
        if(entryString.length == 2) {
            thirdChar.style.backgroundImage = "url('images/one.svg')";
        };
        if(entryString.length == 3 && !entryString.includes('.')) {
            fifthChar.style.backgroundImage = "url('images/one.svg')";
        };
        if(entryString.length == 3 && entryString.includes('.')) {
            thirdChar.style.backgroundImage = "url('images/one.svg')";
        };
        if(entryString.length == 4 && !entryString.includes('.')) {
            seventhChar.style.backgroundImage = "url('images/one.svg')";
        };
        if(entryString.length == 4 && entryString.includes('.')) {
            fifthChar.style.backgroundImage = "url('images/one.svg')";
        };
        if(entryString.length == 5 && !entryString.includes('.')) {
            ninthChar.style.backgroundImage = "url('images/one.svg')";
        };
        if(entryString.length == 5 && entryString.includes('.')) {
            seventhChar.style.backgroundImage = "url('images/one.svg')";
        };
        if(entryString.length == 6 && !entryString.includes('.')) {
            eleventhChar.style.backgroundImage = "url('images/one.svg')";
        };
        if(entryString.length == 6 && entryString.includes('.')) {
            ninthChar.style.backgroundImage = "url('images/one.svg')";
        };
        if(entryString.length == 7 && entryString.includes('.')) {
            eleventhChar.style.backgroundImage = "url('images/one.svg')";
        };
    }
};
const unpressed1 = () => {
    button1.style.background = 'url(images/1.png)';
    button1.style.backgroundRepeat = 'no-repeat';
}
button1.addEventListener('mousedown', pressed1);
button1.addEventListener('mouseup', unpressed1);
document.addEventListener("keydown", function(event) {
    if (event.key == '1') {
      pressed1();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == '1') {
      unpressed1();
    }
});

const button2 = document.querySelector('#button-2');
const pressed2 = () => {
    button2.style.background = 'url(images/2-pressed.png)';
    button2.style.backgroundRepeat = 'no-repeat';
    entryString = entryString + "2";

    if (entryString.charAt(entryString.length-1) == "2") {
        if(entryString.length == 1) {
            firstChar.style.backgroundImage = "url('images/two.svg')";
        };
        if(entryString.length == 2) {
            thirdChar.style.backgroundImage = "url('images/two.svg')";
        };
        if(entryString.length == 3 && !entryString.includes('.')) {
            fifthChar.style.backgroundImage = "url('images/two.svg')";
        };
        if(entryString.length == 3 && entryString.includes('.')) {
            thirdChar.style.backgroundImage = "url('images/two.svg')";
        };
        if(entryString.length == 4 && !entryString.includes('.')) {
            seventhChar.style.backgroundImage = "url('images/two.svg')";
        };
        if(entryString.length == 4 && entryString.includes('.')) {
            fifthChar.style.backgroundImage = "url('images/two.svg')";
        };
        if(entryString.length == 5 && !entryString.includes('.')) {
            ninthChar.style.backgroundImage = "url('images/two.svg')";
        };
        if(entryString.length == 5 && entryString.includes('.')) {
            seventhChar.style.backgroundImage = "url('images/two.svg')";
        };
        if(entryString.length == 6 && !entryString.includes('.')) {
            eleventhChar.style.backgroundImage = "url('images/two.svg')";
        };
        if(entryString.length == 6 && entryString.includes('.')) {
            ninthChar.style.backgroundImage = "url('images/two.svg')";
        };
        if(entryString.length == 7 && entryString.includes('.')) {
            eleventhChar.style.backgroundImage = "url('images/two.svg')";
        };
    }    
};
const unpressed2 = () => {
    button2.style.background = 'url(images/2.png)';
    button2.style.backgroundRepeat = 'no-repeat';
}
button2.addEventListener('mousedown', pressed2);
button2.addEventListener('mouseup', unpressed2);
document.addEventListener("keydown", function(event) {
    if (event.key == '2') {
      pressed2();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == '2') {
      unpressed2();
    }
});

const button3 = document.querySelector('#button-3');
const pressed3 = () => {
    button3.style.background = 'url(images/3-pressed.png)';
    button3.style.backgroundRepeat = 'no-repeat';
    entryString = entryString + "3";
    
    if (entryString.charAt(entryString.length-1) == "3") {
        if(entryString.length == 1) {
            firstChar.style.backgroundImage = "url('images/three.svg')";
        };
        if(entryString.length == 2) {
            thirdChar.style.backgroundImage = "url('images/three.svg')";
        };
        if(entryString.length == 3 && !entryString.includes('.')) {
            fifthChar.style.backgroundImage = "url('images/three.svg')";
        };
        if(entryString.length == 3 && entryString.includes('.')) {
            thirdChar.style.backgroundImage = "url('images/three.svg')";
        };
        if(entryString.length == 4 && !entryString.includes('.')) {
            seventhChar.style.backgroundImage = "url('images/three.svg')";
        };
        if(entryString.length == 4 && entryString.includes('.')) {
            fifthChar.style.backgroundImage = "url('images/three.svg')";
        };
        if(entryString.length == 5 && !entryString.includes('.')) {
            ninthChar.style.backgroundImage = "url('images/three.svg')";
        };
        if(entryString.length == 5 && entryString.includes('.')) {
            seventhChar.style.backgroundImage = "url('images/three.svg')";
        };
        if(entryString.length == 6 && !entryString.includes('.')) {
            eleventhChar.style.backgroundImage = "url('images/three.svg')";
        };
        if(entryString.length == 6 && entryString.includes('.')) {
            ninthChar.style.backgroundImage = "url('images/three.svg')";
        };
        if(entryString.length == 7 && entryString.includes('.')) {
            eleventhChar.style.backgroundImage = "url('images/three.svg')";
        };
    }
};
const unpressed3 = () => {
    button3.style.background = 'url(images/3.png)';
    button3.style.backgroundRepeat = 'no-repeat';
}
button3.addEventListener('mousedown', pressed3);
button3.addEventListener('mouseup', unpressed3);
document.addEventListener("keydown", function(event) {
    if (event.key == '3') {
      pressed3();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == '3') {
      unpressed3();
    }
});

const buttonSubtract = document.querySelector('#button-subtract');
const pressedSubtract = () => {
    buttonSubtract.style.background = 'url(images/subtract-pressed.png)';
    buttonSubtract.style.backgroundRepeat = 'no-repeat';
    
};
const unpressedSubtract = () => {
    buttonSubtract.style.background = 'url(images/subtract.png)';
    buttonSubtract.style.backgroundRepeat = 'no-repeat';
}
buttonSubtract.addEventListener('mousedown', pressedSubtract);
buttonSubtract.addEventListener('mouseup', unpressedSubtract);
document.addEventListener("keydown", function(event) {
    if (event.key == '-') {
      pressedSubtract();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == '-') {
      unpressedSubtract();
    }
});

const button0 = document.querySelector('#button-0');
const pressed0 = () => {
    button0.style.background = 'url(images/0-pressed.png)';
    button0.style.backgroundRepeat = 'no-repeat';
    entryString = entryString + "0";
    
    if (entryString.charAt(entryString.length-1) == "0") {
        if(entryString.length == 1) {
            firstChar.style.backgroundImage = "url('images/zero.svg')";
        };
        if(entryString.length == 2) {
            thirdChar.style.backgroundImage = "url('images/zero.svg')";
        };
        if(entryString.length == 3 && !entryString.includes('.')) {
            fifthChar.style.backgroundImage = "url('images/zero.svg')";
        };
        if(entryString.length == 3 && entryString.includes('.')) {
            thirdChar.style.backgroundImage = "url('images/zero.svg')";
        };
        if(entryString.length == 4 && !entryString.includes('.')) {
            seventhChar.style.backgroundImage = "url('images/zero.svg')";
        };
        if(entryString.length == 4 && entryString.includes('.')) {
            fifthChar.style.backgroundImage = "url('images/zero.svg')";
        };
        if(entryString.length == 5 && !entryString.includes('.')) {
            ninthChar.style.backgroundImage = "url('images/zero.svg')";
        };
        if(entryString.length == 5 && entryString.includes('.')) {
            seventhChar.style.backgroundImage = "url('images/zero.svg')";
        };
        if(entryString.length == 6 && !entryString.includes('.')) {
            eleventhChar.style.backgroundImage = "url('images/zero.svg')";
        };
        if(entryString.length == 6 && entryString.includes('.')) {
            ninthChar.style.backgroundImage = "url('images/zero.svg')";
        };
        if(entryString.length == 7 && entryString.includes('.')) {
            eleventhChar.style.backgroundImage = "url('images/zero.svg')";
        };
    }
};
const unpressed0 = () => {
    button0.style.background = 'url(images/0.png)';
    button0.style.backgroundRepeat = 'no-repeat';
}
button0.addEventListener('mousedown', pressed0);
button0.addEventListener('mouseup', unpressed0);
document.addEventListener("keydown", function(event) {
    if (event.key == '0') {
      pressed0();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == '0') {
      unpressed0();
    }
});

const buttonBack = document.querySelector('#button-back');
const pressedBack = () => {
    buttonBack.style.background = 'url(images/back-pressed.png)';
    buttonBack.style.backgroundRepeat = 'no-repeat';
    
};
const unpressedBack = () => {
    buttonBack.style.background = 'url(images/back.png)';
    buttonBack.style.backgroundRepeat = 'no-repeat';
}
buttonBack.addEventListener('mousedown', pressedBack);
buttonBack.addEventListener('mouseup', unpressedBack);
document.addEventListener("keydown", function(event) {
    if (event.key == 'Backspace') {
      pressedBack();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == 'Backspace') {
      unpressedBack();
    }
});

const buttonEnter = document.querySelector('#button-enter');
const pressedEnter = () => {
    buttonEnter.style.background = 'url(images/enter-pressed.png)';
    buttonEnter.style.backgroundRepeat = 'no-repeat';
    
};
const unpressedEnter = () => {
    buttonEnter.style.background = 'url(images/enter.png)';
    buttonEnter.style.backgroundRepeat = 'no-repeat';
}
buttonEnter.addEventListener('mousedown', pressedEnter);
buttonEnter.addEventListener('mouseup', unpressedEnter);
document.addEventListener("keydown", function(event) {
    if (event.key == 'Enter') {
      pressedEnter();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == 'Enter') {
      unpressedEnter();
    }
});

const buttonAdd = document.querySelector('#button-add');
const pressedAdd = () => {
    buttonAdd.style.background = 'url(images/add-pressed.png)';
    buttonAdd.style.backgroundRepeat = 'no-repeat';
    
};
const unpressedAdd = () => {
    buttonAdd.style.background = 'url(images/add.png)';
    buttonAdd.style.backgroundRepeat = 'no-repeat';
}
buttonAdd.addEventListener('mousedown', pressedAdd);
buttonAdd.addEventListener('mouseup', unpressedAdd);
document.addEventListener("keydown", function(event) {
    if (event.key == '+') {
      pressedAdd();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == '+') {
      unpressedAdd();
    }
});

const buttonPoint = document.querySelector('#button-point');
const pressedPoint = () => {
    buttonPoint.style.background = 'url(images/point-pressed.png)';
    buttonPoint.style.backgroundRepeat = 'no-repeat';

    if (!entryString.includes('.')) {
        entryString = entryString + ".";
    };

    if (entryString.charAt(entryString.length-1) == ".") {
        if(entryString.length == 1) {
            firstChar.style.backgroundImage = "url('images/zero.svg')";
            secondChar.style.backgroundImage = "url('images/dot.svg')";
        };
        if(entryString.length == 2) {
            secondChar.style.backgroundImage = "url('images/dot.svg')";
        };
        if(entryString.length == 3) {
            fourthChar.style.backgroundImage = "url('images/dot.svg')";
        };
        if(entryString.length == 4) {
            sixthChar.style.backgroundImage = "url('images/dot.svg')";
        };
        if(entryString.length == 5) {
            eighthChar.style.backgroundImage = "url('images/dot.svg')";
        };
        if(entryString.length == 6) {
            tenthChar.style.backgroundImage = "url('images/dot.svg')";
        };
        if(entryString.length == 7) {
            twelfthChar.style.backgroundImage = "url('images/dot.svg')";
        };
    }
    
};
const unpressedPoint = () => {
    buttonPoint.style.background = 'url(images/point.png)';
    buttonPoint.style.backgroundRepeat = 'no-repeat';
}
buttonPoint.addEventListener('mousedown', pressedPoint);
buttonPoint.addEventListener('mouseup', unpressedPoint);
document.addEventListener("keydown", function(event) {
    if (event.key == '.') {
      pressedPoint();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == '.') {
      unpressedPoint();
    }
});

const buttonPower = document.querySelector('#button-power');
const pressedPower = () => {
    buttonPower.style.background = 'url(images/power-pressed.png)';
    buttonPower.style.backgroundRepeat = 'no-repeat';
    
};
const unpressedPower = () => {
    buttonPower.style.background = 'url(images/power.png)';
    buttonPower.style.backgroundRepeat = 'no-repeat';
}
buttonPower.addEventListener('mousedown', pressedPower);
buttonPower.addEventListener('mouseup', unpressedPower);
document.addEventListener("keydown", function(event) {
    if (event.key == '^') {
      pressedPower();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == '^') {
      unpressedPower();
    }
});

const buttonClear = document.querySelector('#button-clear');
const pressedClear = () => {
    buttonClear.style.background = 'url(images/clear-pressed.png)';
    buttonClear.style.backgroundRepeat = 'no-repeat';
    
};
const unpressedClear = () => {
    buttonClear.style.background = 'url(images/clear.png)';
    buttonClear.style.backgroundRepeat = 'no-repeat';
}
buttonClear.addEventListener('mousedown', pressedClear);
buttonClear.addEventListener('mouseup', unpressedClear);
document.addEventListener("keydown", function(event) {
    if (event.key == 'Delete') {
      pressedClear();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == 'Delete') {
      unpressedClear();
    }
});