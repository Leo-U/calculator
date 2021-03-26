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
let newEntryString = '';
let pointCheck = false;
let savedData = '';
let saveCheck;

const thirteenthChar = document.querySelector('#thirteenth-char');
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

const shiftLeft = () => {
    if (entryString.length >= 7 && !entryString.includes('.') || entryString.length >= 8 && entryString.includes('.')) {
        newEntryString = entryString;
        altClear();
        for (let i = 0; newEntryString.length > 0; i++) {
            newEntryString = newEntryString.slice(1);
            if (newEntryString.charAt(0) == "7") {
            pressed7();
            };
            if (newEntryString.charAt(0) == "8") {
            pressed8();
            };
            if (newEntryString.charAt(0) == "9") {
                pressed9();
            };
            if (newEntryString.charAt(0) == "4") {
                pressed4();
            };
            if (newEntryString.charAt(0) == "5") {
                pressed5();
            };
            if (newEntryString.charAt(0) == "6") {
                pressed6();
            };
            if (newEntryString.charAt(0) == "1") {
                pressed1();
            };
            if (newEntryString.charAt(0) == "2") {
                pressed2();
            };
            if (newEntryString.charAt(0) == "3") {
                pressed3();
            };
            if (newEntryString.charAt(0) == "0") {
                pressed0();
            };
            if (newEntryString.charAt(0) == ".") {
                secondaryPoint();
            };
        };
    };
};

// const secondaryShift = () => {
//     if (entryString.length >= 7 && !entryString.includes('.') || entryString.length >= 8 && entryString.includes('.')) {
//         newEntryString = entryString;
//         altClear();
//         for (let i = 0; newEntryString.length > 0; i++) {
//             newEntryString = newEntryString.slice(1);
//             if (newEntryString.charAt(0) == "7") {
//             pressed7();
//             };
//             if (newEntryString.charAt(0) == "8") {
//             pressed8();
//             };
//             if (newEntryString.charAt(0) == "9") {
//                 pressed9();
//             };
//             if (newEntryString.charAt(0) == "4") {
//                 pressed4();
//             };
//             if (newEntryString.charAt(0) == "5") {
//                 pressed5();
//             };
//             if (newEntryString.charAt(0) == "6") {
//                 pressed6();
//             };
//             if (newEntryString.charAt(0) == "1") {
//                 pressed1();
//             };
//             if (newEntryString.charAt(0) == "2") {
//                 pressed2();
//             };
//             if (newEntryString.charAt(0) == "3") {
//                 pressed3();
//             };
//             if (newEntryString.charAt(0) == "0") {
//                 pressed0();
//             };
//             if (newEntryString.charAt(0) == ".") {
//                 pressedPoint();
//             };
//         }
//     }
// };

const button7 = document.querySelector('#button-7');
const pressed7Anim = () => {
    button7.style.background = 'url(images/7-pressed.png)';
    button7.style.backgroundRepeat = 'no-repeat';
}
const pressed7 = () => {
    entryString = entryString + "7";
    shiftLeft();
    if (entryString.charAt(entryString.length-1) == "7") {
        if(entryString.length == 1) {
            firstChar.style.backgroundImage = "url('images/seven.svg')";
        };
        if(entryString.length == 2 && !entryString.includes('.')) {
            thirdChar.style.backgroundImage = "url('images/seven.svg')";
        };
        if(!entryString.includes('.')) {
            if(entryString.length == 3) {
                fifthChar.style.backgroundImage = "url('images/seven.svg')";
            };
            if(entryString.length == 4) {
                seventhChar.style.backgroundImage = "url('images/seven.svg')";
            };
            if(entryString.length == 5) {
                ninthChar.style.backgroundImage = "url('images/seven.svg')";
            };
            if(entryString.length == 6) {
                eleventhChar.style.backgroundImage = "url('images/seven.svg')";
            };
        }
        if(entryString.includes('.') && entryString.charAt(1) !== '.' || entryString.charAt(1) == '.' && entryString.charAt(1) == '.'){
            if(entryString.length == 3) {
                thirdChar.style.backgroundImage = "url('images/seven.svg')";
            };
            if(entryString.length == 4) {
                fifthChar.style.backgroundImage = "url('images/seven.svg')";
            };
            if(entryString.length == 5) {
                seventhChar.style.backgroundImage = "url('images/seven.svg')";
            };
            if(entryString.length == 6) {
                ninthChar.style.backgroundImage = "url('images/seven.svg')";
            };
            if(entryString.length == 7) {
                eleventhChar.style.backgroundImage = "url('images/seven.svg')";
            };
        }
        // if(entryString.includes('.') && entryString.charAt(1) == '.') {
        //     if(entryString.length == 3) {
        //         firstChar.style.backgroundImage = "url('images/seven.svg')";
        //     };
        //     if(entryString.length == 4) {
        //         thirdChar.style.backgroundImage = "url('images/seven.svg')";
        //     };
        //     if(entryString.length == 5) {
        //         fifthChar.style.backgroundImage = "url('images/seven.svg')";
        //     };
        //     if(entryString.length == 6) {
        //         seventhChar.style.backgroundImage = "url('images/seven.svg')";
        //     };
        //     if(entryString.length == 7) {
        //         ninthChar.style.backgroundImage = "url('images/seven.svg')";
        //     };
        //     if(entryString.length == 8) {
        //         eleventhChar.style.backgroundImage = "url('images/seven.svg')";
        //     };
        // }
        if(entryString.includes('.') && entryString.charAt(0) == '.') {
            if (entryString.length == 2) {
                firstChar.style.backgroundImage = "url('images/seven.svg')"
            }
        }
    }
};
const unpressed7 = () => {
    button7.style.background = 'url(images/7.png)';
    button7.style.backgroundRepeat = 'no-repeat';
}
button7.addEventListener('mousedown', pressed7Anim);
button7.addEventListener('mousedown', pressed7);
button7.addEventListener('mouseup', unpressed7);
document.addEventListener("keydown", function(event) {
    if (event.key == '7') {
        pressed7Anim();
        pressed7();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == '7') {
      unpressed7();
    }
});

const button8 = document.querySelector('#button-8');
const pressed8Anim = () => {
    button8.style.background = 'url(images/8-pressed.png)';
    button8.style.backgroundRepeat = 'no-repeat';
}
const pressed8 = () => {
    entryString = entryString + "8";
    shiftLeft();
    if (entryString.charAt(entryString.length-1) == "8") {
        if(entryString.length == 1) {
            firstChar.style.backgroundImage = "url('images/eight.svg')";
        };
        if(entryString.length == 2 && !entryString.includes('.')) {
            thirdChar.style.backgroundImage = "url('images/eight.svg')";
        };
        if(!entryString.includes('.')) {
            if(entryString.length == 3) {
                fifthChar.style.backgroundImage = "url('images/eight.svg')";
            };
            if(entryString.length == 4) {
                seventhChar.style.backgroundImage = "url('images/eight.svg')";
            };
            if(entryString.length == 5) {
                ninthChar.style.backgroundImage = "url('images/eight.svg')";
            };
            if(entryString.length == 6) {
                eleventhChar.style.backgroundImage = "url('images/eight.svg')";
            };
        }
        if(entryString.includes('.') && entryString.charAt(1) !== '.' || entryString.charAt(1) == '.' && entryString.charAt(1) == '.' && pointCheck == false){
            if(entryString.length == 3) {
                thirdChar.style.backgroundImage = "url('images/eight.svg')";
            };
            if(entryString.length == 4) {
                fifthChar.style.backgroundImage = "url('images/eight.svg')";
            };
            if(entryString.length == 5) {
                seventhChar.style.backgroundImage = "url('images/eight.svg')";
            };
            if(entryString.length == 6) {
                ninthChar.style.backgroundImage = "url('images/eight.svg')";
            };
            if(entryString.length == 7) {
                eleventhChar.style.backgroundImage = "url('images/eight.svg')";
            };
        };
        // if(entryString.includes('.') && entryString.charAt(1) == '.' && pointCheck == true) {
        //     if(entryString.length == 3) {
        //         firstChar.style.backgroundImage = "url('images/eight.svg')";
        //     };
        //     if(entryString.length == 4) {
        //         thirdChar.style.backgroundImage = "url('images/eight.svg')";
        //     };
        //     if(entryString.length == 5) {
        //         fifthChar.style.backgroundImage = "url('images/eight.svg')";
        //     };
        //     if(entryString.length == 6) {
        //         seventhChar.style.backgroundImage = "url('images/eight.svg')";
        //     };
        //     if(entryString.length == 7) {
        //         ninthChar.style.backgroundImage = "url('images/eight.svg')";
        //     };
        //     if(entryString.length == 8) {
        //         eleventhChar.style.backgroundImage = "url('images/eight.svg')";
        //     };
        // };
        if(entryString.includes('.') && entryString.charAt(0) == '.') {
            if (entryString.length == 2) {
                firstChar.style.backgroundImage = "url('images/eight.svg')"
            }
        }
    }
};
const unpressed8 = () => {
    button8.style.background = 'url(images/8.png)';
    button8.style.backgroundRepeat = 'no-repeat';
}
button8.addEventListener('mousedown', pressed8Anim);
button8.addEventListener('mousedown', pressed8);
button8.addEventListener('mouseup', unpressed8);
document.addEventListener("keydown", function(event) {
    if (event.key == '8') {
    pressed8Anim();
    pressed8();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == '8') {
      unpressed8();
    }
});

const button9 = document.querySelector('#button-9');
const pressed9Anim = () => {
    button9.style.background = 'url(images/9-pressed.png)';
    button9.style.backgroundRepeat = 'no-repeat';
}
const pressed9 = () => {
    entryString = entryString + "9";
    shiftLeft();
    if (entryString.charAt(entryString.length-1) == "9") {
        if(entryString.length == 1) {
            firstChar.style.backgroundImage = "url('images/nine.svg')";
        };
        if(entryString.length == 2 && !entryString.includes('.')) {
            thirdChar.style.backgroundImage = "url('images/nine.svg')";
        };
        if(!entryString.includes('.')) {
            if(entryString.length == 3) {
                fifthChar.style.backgroundImage = "url('images/nine.svg')";
            };
            if(entryString.length == 4) {
                seventhChar.style.backgroundImage = "url('images/nine.svg')";
            };
            if(entryString.length == 5) {
                ninthChar.style.backgroundImage = "url('images/nine.svg')";
            };
            if(entryString.length == 6) {
                eleventhChar.style.backgroundImage = "url('images/nine.svg')";
            };
        }
        if(entryString.includes('.') && entryString.charAt(1) !== '.' || entryString.charAt(1) == '.' && entryString.charAt(1) == '.' && pointCheck == false){
            if(entryString.length == 3) {
                thirdChar.style.backgroundImage = "url('images/nine.svg')";
            };
            if(entryString.length == 4) {
                fifthChar.style.backgroundImage = "url('images/nine.svg')";
            };
            if(entryString.length == 5) {
                seventhChar.style.backgroundImage = "url('images/nine.svg')";
            };
            if(entryString.length == 6) {
                ninthChar.style.backgroundImage = "url('images/nine.svg')";
            };
            if(entryString.length == 7) {
                eleventhChar.style.backgroundImage = "url('images/nine.svg')";
            };
        }
        // if(entryString.includes('.') && entryString.charAt(1) == '.'&& pointCheck == true) {
        //     if(entryString.length == 3) {
        //         firstChar.style.backgroundImage = "url('images/nine.svg')";
        //     };
        //     if(entryString.length == 4) {
        //         thirdChar.style.backgroundImage = "url('images/nine.svg')";
        //     };
        //     if(entryString.length == 5) {
        //         fifthChar.style.backgroundImage = "url('images/nine.svg')";
        //     };
        //     if(entryString.length == 6) {
        //         seventhChar.style.backgroundImage = "url('images/nine.svg')";
        //     };
        //     if(entryString.length == 7) {
        //         ninthChar.style.backgroundImage = "url('images/nine.svg')";
        //     };
        //     if(entryString.length == 8) {
        //         eleventhChar.style.backgroundImage = "url('images/nine.svg')";
        //     };
        // };
        if(entryString.includes('.') && entryString.charAt(0) == '.') {
            if (entryString.length == 2) {
                firstChar.style.backgroundImage = "url('images/nine.svg')"
            }
        }
    }
};
const unpressed9 = () => {
    button9.style.background = 'url(images/9.png)';
    button9.style.backgroundRepeat = 'no-repeat';
}
button9.addEventListener('mousedown', pressed9Anim);
button9.addEventListener('mousedown', pressed9);
button9.addEventListener('mouseup', unpressed9);
document.addEventListener("keydown", function(event) {
    if (event.key == '9') {
        pressed9Anim();
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
    // if (entryString.charAt(entryString.length-1) == "4") {
    //     if(entryString.length == 1) {
    //         firstChar.style.backgroundImage = "url('images/four.svg')";
    //     };
    //     if(entryString.length == 2) {
    //         thirdChar.style.backgroundImage = "url('images/four.svg')";
    //     };
    //     if(!entryString.includes('.')) {
    //         if(entryString.length == 3) {
    //             fifthChar.style.backgroundImage = "url('images/four.svg')";
    //         };
    //         if(entryString.length == 4) {
    //             seventhChar.style.backgroundImage = "url('images/four.svg')";
    //         };
    //         if(entryString.length == 5) {
    //             ninthChar.style.backgroundImage = "url('images/four.svg')";
    //         };
    //         if(entryString.length == 6) {
    //             eleventhChar.style.backgroundImage = "url('images/four.svg')";
    //         };
    //     }
    //     if(entryString.includes('.')){
    //         if(entryString.length == 3) {
    //             thirdChar.style.backgroundImage = "url('images/four.svg')";
    //         };

    //         if(entryString.length == 4) {
    //             fifthChar.style.backgroundImage = "url('images/four.svg')";
    //         };

    //         if(entryString.length == 5) {
    //             seventhChar.style.backgroundImage = "url('images/four.svg')";
    //         };

    //         if(entryString.length == 6) {
    //             ninthChar.style.backgroundImage = "url('images/four.svg')";
    //         };
    //         if(entryString.length == 7) {
    //             eleventhChar.style.backgroundImage = "url('images/four.svg')";
    //         };
    //     }
    // }
const button4 = document.querySelector('#button-4');
const pressed4Anim = () => {
    button4.style.background = 'url(images/4-pressed.png)';
    button4.style.backgroundRepeat = 'no-repeat';
}
const pressed4 = () => {
    entryString = entryString + "4";
    shiftLeft();
    if (entryString.charAt(entryString.length-1) == "4") {
        if(entryString.length == 1) {
            firstChar.style.backgroundImage = "url('images/four.svg')";
        };
        if(entryString.length == 2 && !entryString.includes('.')) {
            thirdChar.style.backgroundImage = "url('images/four.svg')";
        };
        if(!entryString.includes('.')) {
            if(entryString.length == 3) {
                fifthChar.style.backgroundImage = "url('images/four.svg')";
            };
            if(entryString.length == 4) {
                seventhChar.style.backgroundImage = "url('images/four.svg')";
            };
            if(entryString.length == 5) {
                ninthChar.style.backgroundImage = "url('images/four.svg')";
            };
            if(entryString.length == 6) {
                eleventhChar.style.backgroundImage = "url('images/four.svg')";
            };
        }
        if(entryString.includes('.') && entryString.charAt(1) !== '.' || entryString.charAt(1) == '.' && entryString.charAt(1) == '.' && pointCheck == false){
            if(entryString.length == 3) {
                thirdChar.style.backgroundImage = "url('images/four.svg')";
            };
            if(entryString.length == 4) {
                fifthChar.style.backgroundImage = "url('images/four.svg')";
            };
            if(entryString.length == 5) {
                seventhChar.style.backgroundImage = "url('images/four.svg')";
            };
            if(entryString.length == 6) {
                ninthChar.style.backgroundImage = "url('images/four.svg')";
            };
            if(entryString.length == 7) {
                eleventhChar.style.backgroundImage = "url('images/four.svg')";
            };
        }
        // if(entryString.includes('.') && entryString.charAt(1) == '.'&& pointCheck == true) {
        //     if(entryString.length == 3) {
        //         firstChar.style.backgroundImage = "url('images/four.svg')";
        //     };
        //     if(entryString.length == 4) {
        //         thirdChar.style.backgroundImage = "url('images/four.svg')";
        //     };
        //     if(entryString.length == 5) {
        //         fifthChar.style.backgroundImage = "url('images/four.svg')";
        //     };
        //     if(entryString.length == 6) {
        //         seventhChar.style.backgroundImage = "url('images/four.svg')";
        //     };
        //     if(entryString.length == 7) {
        //         ninthChar.style.backgroundImage = "url('images/four.svg')";
        //     };
        //     if(entryString.length == 8) {
        //         eleventhChar.style.backgroundImage = "url('images/four.svg')";
        //     };
        // };
        if(entryString.includes('.') && entryString.charAt(0) == '.') {
            if (entryString.length == 2) {
                firstChar.style.backgroundImage = "url('images/four.svg')"
            }
        }
    }
};
const unpressed4 = () => {
    button4.style.background = 'url(images/4.png)';
    button4.style.backgroundRepeat = 'no-repeat';
}
button4.addEventListener('mousedown', pressed4Anim);
button4.addEventListener('mousedown', pressed4);
button4.addEventListener('mouseup', unpressed4);
document.addEventListener("keydown", function(event) {
    if (event.key == '4') {
        pressed4Anim();
        pressed4();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == '4') {
      unpressed4();
    }
});

const button5 = document.querySelector('#button-5');
const pressed5Anim = () => {
    button5.style.background = 'url(images/5-pressed.png)';
    button5.style.backgroundRepeat = 'no-repeat';
}
const pressed5 = () => {
    entryString = entryString + "5";
    shiftLeft();
    if (entryString.charAt(entryString.length-1) == "5") {
        if(entryString.length == 1) {
            firstChar.style.backgroundImage = "url('images/five.svg')";
        };
        if(entryString.length == 2 && !entryString.includes('.')) {
            thirdChar.style.backgroundImage = "url('images/five.svg')";
        };
        if(!entryString.includes('.')) {
            if(entryString.length == 3) {
                fifthChar.style.backgroundImage = "url('images/five.svg')";
            };
            if(entryString.length == 4) {
                seventhChar.style.backgroundImage = "url('images/five.svg')";
            };
            if(entryString.length == 5) {
                ninthChar.style.backgroundImage = "url('images/five.svg')";
            };
            if(entryString.length == 6) {
                eleventhChar.style.backgroundImage = "url('images/five.svg')";
            };
        }
        if(entryString.includes('.') && entryString.charAt(1) !== '.' || entryString.charAt(1) == '.' && entryString.charAt(1) == '.' && pointCheck == false){
            if(entryString.length == 3) {
                thirdChar.style.backgroundImage = "url('images/five.svg')";
            };
            if(entryString.length == 4) {
                fifthChar.style.backgroundImage = "url('images/five.svg')";
            };
            if(entryString.length == 5) {
                seventhChar.style.backgroundImage = "url('images/five.svg')";
            };
            if(entryString.length == 6) {
                ninthChar.style.backgroundImage = "url('images/five.svg')";
            };
            if(entryString.length == 7) {
                eleventhChar.style.backgroundImage = "url('images/five.svg')";
            };
        }
        // if(entryString.includes('.') && entryString.charAt(1) == '.'&& pointCheck == true) {
        //     if(entryString.length == 3) {
        //         firstChar.style.backgroundImage = "url('images/five.svg')";
        //     };
        //     if(entryString.length == 4) {
        //         thirdChar.style.backgroundImage = "url('images/five.svg')";
        //     };
        //     if(entryString.length == 5) {
        //         fifthChar.style.backgroundImage = "url('images/five.svg')";
        //     };
        //     if(entryString.length == 6) {
        //         seventhChar.style.backgroundImage = "url('images/five.svg')";
        //     };
        //     if(entryString.length == 7) {
        //         ninthChar.style.backgroundImage = "url('images/five.svg')";
        //     };
        //     if(entryString.length == 8) {
        //         eleventhChar.style.backgroundImage = "url('images/five.svg')";
        //     };
        // };
        if(entryString.includes('.') && entryString.charAt(0) == '.') {
            if (entryString.length == 2) {
                firstChar.style.backgroundImage = "url('images/five.svg')"
            }
        }
    }
};
const unpressed5 = () => {
    button5.style.background = 'url(images/5.png)';
    button5.style.backgroundRepeat = 'no-repeat';
}
button5.addEventListener('mousedown', pressed5Anim);
button5.addEventListener('mousedown', pressed5);
button5.addEventListener('mouseup', unpressed5);
document.addEventListener("keydown", function(event) {
    if (event.key == '5') {
        pressed5Anim();
        pressed5();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == '5') {
      unpressed5();
    }
});

const button6 = document.querySelector('#button-6');
const pressed6Anim = () => {
    button6.style.background = 'url(images/6-pressed.png)';
    button6.style.backgroundRepeat = 'no-repeat';
}
const pressed6 = () => {
    entryString = entryString + "6";
    shiftLeft();
    if (entryString.charAt(entryString.length-1) == "6") {
        if(entryString.length == 1) {
            firstChar.style.backgroundImage = "url('images/six.svg')";
        };
        if(entryString.length == 2 && !entryString.includes('.')) {
            thirdChar.style.backgroundImage = "url('images/six.svg')";
        };
        if(!entryString.includes('.')) {
            if(entryString.length == 3) {
                fifthChar.style.backgroundImage = "url('images/six.svg')";
            };
            if(entryString.length == 4) {
                seventhChar.style.backgroundImage = "url('images/six.svg')";
            };
            if(entryString.length == 5) {
                ninthChar.style.backgroundImage = "url('images/six.svg')";
            };
            if(entryString.length == 6) {
                eleventhChar.style.backgroundImage = "url('images/six.svg')";
            };
        }
        if(entryString.includes('.') && entryString.charAt(1) !== '.' || entryString.charAt(1) == '.' && entryString.charAt(1) == '.' && pointCheck == false){
            if(entryString.length == 3) {
                thirdChar.style.backgroundImage = "url('images/six.svg')";
            };
            if(entryString.length == 4) {
                fifthChar.style.backgroundImage = "url('images/six.svg')";
            };
            if(entryString.length == 5) {
                seventhChar.style.backgroundImage = "url('images/six.svg')";
            };
            if(entryString.length == 6) {
                ninthChar.style.backgroundImage = "url('images/six.svg')";
            };
            if(entryString.length == 7) {
                eleventhChar.style.backgroundImage = "url('images/six.svg')";
            };
        }
        // if(entryString.includes('.') && entryString.charAt(1) == '.'&& pointCheck == true) {
        //     if(entryString.length == 3) {
        //         firstChar.style.backgroundImage = "url('images/six.svg')";
        //     };
        //     if(entryString.length == 4) {
        //         thirdChar.style.backgroundImage = "url('images/six.svg')";
        //     };
        //     if(entryString.length == 5) {
        //         fifthChar.style.backgroundImage = "url('images/six.svg')";
        //     };
        //     if(entryString.length == 6) {
        //         seventhChar.style.backgroundImage = "url('images/six.svg')";
        //     };
        //     if(entryString.length == 7) {
        //         ninthChar.style.backgroundImage = "url('images/six.svg')";
        //     };
        //     if(entryString.length == 8) {
        //         eleventhChar.style.backgroundImage = "url('images/six.svg')";
        //     };
        // };
        if(entryString.includes('.') && entryString.charAt(0) == '.') {
            if (entryString.length == 2) {
                firstChar.style.backgroundImage = "url('images/six.svg')"
            }
        }
    }
};
const unpressed6 = () => {
    button6.style.background = 'url(images/6.png)';
    button6.style.backgroundRepeat = 'no-repeat';
}
button6.addEventListener('mousedown', pressed6Anim);
button6.addEventListener('mousedown', pressed6);
button6.addEventListener('mouseup', unpressed6);
document.addEventListener("keydown", function(event) {
    if (event.key == '6') {
        pressed6Anim();
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
const pressed1Anim = () => {
    button1.style.background = 'url(images/1-pressed.png)';
    button1.style.backgroundRepeat = 'no-repeat';
}
const pressed1 = () => {
    entryString = entryString + "1";
    shiftLeft();
    if (entryString.charAt(entryString.length-1) == "1") {
        if(entryString.length == 1) {
            firstChar.style.backgroundImage = "url('images/one.svg')";
        };
        if(entryString.length == 2 && !entryString.includes('.')) {
            thirdChar.style.backgroundImage = "url('images/one.svg')";
        };
        if(!entryString.includes('.')) {
            if(entryString.length == 3) {
                fifthChar.style.backgroundImage = "url('images/one.svg')";
            };
            if(entryString.length == 4) {
                seventhChar.style.backgroundImage = "url('images/one.svg')";
            };
            if(entryString.length == 5) {
                ninthChar.style.backgroundImage = "url('images/one.svg')";
            };
            if(entryString.length == 6) {
                eleventhChar.style.backgroundImage = "url('images/one.svg')";
            };
        }
        if(entryString.includes('.') && entryString.charAt(1) !== '.' || entryString.charAt(1) == '.' && entryString.charAt(1) == '.' && pointCheck == false){
            if(entryString.length == 3) {
                thirdChar.style.backgroundImage = "url('images/one.svg')";
            };
            if(entryString.length == 4) {
                fifthChar.style.backgroundImage = "url('images/one.svg')";
            };
            if(entryString.length == 5) {
                seventhChar.style.backgroundImage = "url('images/one.svg')";
            };
            if(entryString.length == 6) {
                ninthChar.style.backgroundImage = "url('images/one.svg')";
            };
            if(entryString.length == 7) {
                eleventhChar.style.backgroundImage = "url('images/one.svg')";
            };
        }
        // if(entryString.includes('.') && entryString.charAt(1) == '.'&& pointCheck == true) {
        //     if(entryString.length == 3) {
        //         firstChar.style.backgroundImage = "url('images/one.svg')";
        //     };
        //     if(entryString.length == 4) {
        //         thirdChar.style.backgroundImage = "url('images/one.svg')";
        //     };
        //     if(entryString.length == 5) {
        //         fifthChar.style.backgroundImage = "url('images/one.svg')";
        //     };
        //     if(entryString.length == 6) {
        //         seventhChar.style.backgroundImage = "url('images/one.svg')";
        //     };
        //     if(entryString.length == 7) {
        //         ninthChar.style.backgroundImage = "url('images/one.svg')";
        //     };
        //     if(entryString.length == 8) {
        //         eleventhChar.style.backgroundImage = "url('images/one.svg')";
        //     };
        // };
        if(entryString.includes('.') && entryString.charAt(0) == '.') {
            if (entryString.length == 2) {
                firstChar.style.backgroundImage = "url('images/one.svg')"
            }
        }
    }
};
const unpressed1 = () => {
    button1.style.background = 'url(images/1.png)';
    button1.style.backgroundRepeat = 'no-repeat';
}
button1.addEventListener('mousedown', pressed1Anim);
button1.addEventListener('mousedown', pressed1);
button1.addEventListener('mouseup', unpressed1);
document.addEventListener("keydown", function(event) {
    if (event.key == '1') {
        pressed1Anim();
        pressed1();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == '1') {
      unpressed1();
    }
});

const button2 = document.querySelector('#button-2');
const pressed2Anim = () => {
    button2.style.background = 'url(images/2-pressed.png)';
    button2.style.backgroundRepeat = 'no-repeat';
}
const pressed2 = () => {
    entryString = entryString + "2";
    shiftLeft();
    if (entryString.charAt(entryString.length-1) == "2") {
        if(entryString.length == 1) {
            firstChar.style.backgroundImage = "url('images/two.svg')";
        };
        if(entryString.length == 2 && !entryString.includes('.')) {
            thirdChar.style.backgroundImage = "url('images/two.svg')";
        };
        if(!entryString.includes('.')) {
            if(entryString.length == 3) {
                fifthChar.style.backgroundImage = "url('images/two.svg')";
            };
            if(entryString.length == 4) {
                seventhChar.style.backgroundImage = "url('images/two.svg')";
            };
            if(entryString.length == 5) {
                ninthChar.style.backgroundImage = "url('images/two.svg')";
            };
            if(entryString.length == 6) {
                eleventhChar.style.backgroundImage = "url('images/two.svg')";
            };
        }
        if(entryString.includes('.') && entryString.charAt(1) !== '.' || entryString.charAt(1) == '.' && entryString.charAt(1) == '.' && pointCheck == false){
            if(entryString.length == 3) {
                thirdChar.style.backgroundImage = "url('images/two.svg')";
            };
            if(entryString.length == 4) {
                fifthChar.style.backgroundImage = "url('images/two.svg')";
            };
            if(entryString.length == 5) {
                seventhChar.style.backgroundImage = "url('images/two.svg')";
            };
            if(entryString.length == 6) {
                ninthChar.style.backgroundImage = "url('images/two.svg')";
            };
            if(entryString.length == 7) {
                eleventhChar.style.backgroundImage = "url('images/two.svg')";
            };
        }
        // if(entryString.includes('.') && entryString.charAt(1) == '.'&& pointCheck == true) {
        //     if(entryString.length == 3) {
        //         firstChar.style.backgroundImage = "url('images/two.svg')";
        //     };
        //     if(entryString.length == 4) {
        //         thirdChar.style.backgroundImage = "url('images/two.svg')";
        //     };
        //     if(entryString.length == 5) {
        //         fifthChar.style.backgroundImage = "url('images/two.svg')";
        //     };
        //     if(entryString.length == 6) {
        //         seventhChar.style.backgroundImage = "url('images/two.svg')";
        //     };
        //     if(entryString.length == 7) {
        //         ninthChar.style.backgroundImage = "url('images/two.svg')";
        //     };
        //     if(entryString.length == 8) {
        //         eleventhChar.style.backgroundImage = "url('images/two.svg')";
        //     };
        // };
        if(entryString.includes('.') && entryString.charAt(0) == '.') {
            if (entryString.length == 2) {
                firstChar.style.backgroundImage = "url('images/two.svg')"
            }
        }
    }
};
const unpressed2 = () => {
    button2.style.background = 'url(images/2.png)';
    button2.style.backgroundRepeat = 'no-repeat';
}
button2.addEventListener('mousedown', pressed2Anim);
button2.addEventListener('mousedown', pressed2);
button2.addEventListener('mouseup', unpressed2);
document.addEventListener("keydown", function(event) {
    if (event.key == '2') {
        pressed2Anim();
        pressed2();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == '2') {
      unpressed2();
    }
});

const button3 = document.querySelector('#button-3');
const pressed3Anim = () => {
    button3.style.background = 'url(images/3-pressed.png)';
    button3.style.backgroundRepeat = 'no-repeat';
}
const pressed3 = () => {
    entryString = entryString + "3";
    shiftLeft();
    if (entryString.charAt(entryString.length-1) == "3") {
        if(entryString.length == 1) {
            firstChar.style.backgroundImage = "url('images/three.svg')";
        };
        if(entryString.length == 2 && !entryString.includes('.')) {
            thirdChar.style.backgroundImage = "url('images/three.svg')";
        };
        if(!entryString.includes('.')) {
            if(entryString.length == 3) {
                fifthChar.style.backgroundImage = "url('images/three.svg')";
            };
            if(entryString.length == 4) {
                seventhChar.style.backgroundImage = "url('images/three.svg')";
            };
            if(entryString.length == 5) {
                ninthChar.style.backgroundImage = "url('images/three.svg')";
            };
            if(entryString.length == 6) {
                eleventhChar.style.backgroundImage = "url('images/three.svg')";
            };
        }
        if(entryString.includes('.') && entryString.charAt(1) !== '.' || entryString.charAt(1) == '.' && entryString.charAt(1) == '.' && pointCheck == false){
            if(entryString.length == 3) {
                thirdChar.style.backgroundImage = "url('images/three.svg')";
            };
            if(entryString.length == 4) {
                fifthChar.style.backgroundImage = "url('images/three.svg')";
            };
            if(entryString.length == 5) {
                seventhChar.style.backgroundImage = "url('images/three.svg')";
            };
            if(entryString.length == 6) {
                ninthChar.style.backgroundImage = "url('images/three.svg')";
            };
            if(entryString.length == 7) {
                eleventhChar.style.backgroundImage = "url('images/three.svg')";
            };
        }
        // if(entryString.includes('.') && entryString.charAt(1) == '.'&& pointCheck == true) {
        //     if(entryString.length == 3) {
        //         firstChar.style.backgroundImage = "url('images/three.svg')";
        //     };
        //     if(entryString.length == 4) {
        //         thirdChar.style.backgroundImage = "url('images/three.svg')";
        //     };
        //     if(entryString.length == 5) {
        //         fifthChar.style.backgroundImage = "url('images/three.svg')";
        //     };
        //     if(entryString.length == 6) {
        //         seventhChar.style.backgroundImage = "url('images/three.svg')";
        //     };
        //     if(entryString.length == 7) {
        //         ninthChar.style.backgroundImage = "url('images/three.svg')";
        //     };
        //     if(entryString.length == 8) {
        //         eleventhChar.style.backgroundImage = "url('images/three.svg')";
        //     };
        // };
        if(entryString.includes('.') && entryString.charAt(0) == '.') {
            if (entryString.length == 2) {
                firstChar.style.backgroundImage = "url('images/three.svg')"
            }
        }
    }
};
const unpressed3 = () => {
    button3.style.background = 'url(images/3.png)';
    button3.style.backgroundRepeat = 'no-repeat';
}
button3.addEventListener('mousedown', pressed3Anim);
button3.addEventListener('mousedown', pressed3);
button3.addEventListener('mouseup', unpressed3);
document.addEventListener("keydown", function(event) {
    if (event.key == '3') {
        pressed3Anim();
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
const pressed0Anim = () => {
    button0.style.background = 'url(images/0-pressed.png)';
    button0.style.backgroundRepeat = 'no-repeat';
}
const pressed0 = () => {
    entryString = entryString + "0";
    shiftLeft();
    if (entryString.charAt(entryString.length-1) == "0") {
        if(entryString.length == 1) {
            firstChar.style.backgroundImage = "url('images/zero.svg')";
        };
        if(entryString.length == 2 && !entryString.includes('.')) {
            thirdChar.style.backgroundImage = "url('images/zero.svg')";
        };
        if(!entryString.includes('.')) {
            if(entryString.length == 3) {
                fifthChar.style.backgroundImage = "url('images/zero.svg')";
            };
            if(entryString.length == 4) {
                seventhChar.style.backgroundImage = "url('images/zero.svg')";
            };
            if(entryString.length == 5) {
                ninthChar.style.backgroundImage = "url('images/zero.svg')";
            };
            if(entryString.length == 6) {
                eleventhChar.style.backgroundImage = "url('images/zero.svg')";
            };
        }
        if(entryString.includes('.') && entryString.charAt(1) !== '.' || entryString.charAt(1) == '.' && entryString.charAt(1) == '.' && pointCheck == false){
            if(entryString.length == 3) {
                thirdChar.style.backgroundImage = "url('images/zero.svg')";
            };
            if(entryString.length == 4) {
                fifthChar.style.backgroundImage = "url('images/zero.svg')";
            };
            if(entryString.length == 5) {
                seventhChar.style.backgroundImage = "url('images/zero.svg')";
            };
            if(entryString.length == 6) {
                ninthChar.style.backgroundImage = "url('images/zero.svg')";
            };
            if(entryString.length == 7) {
                eleventhChar.style.backgroundImage = "url('images/zero.svg')";
            };
        }
        // if(entryString.includes('.') && entryString.charAt(1) == '.'&& pointCheck == true) {
        //     if(entryString.length == 3) {
        //         firstChar.style.backgroundImage = "url('images/zero.svg')";
        //     };
        //     if(entryString.length == 4) {
        //         thirdChar.style.backgroundImage = "url('images/zero.svg')";
        //     };
        //     if(entryString.length == 5) {
        //         fifthChar.style.backgroundImage = "url('images/zero.svg')";
        //     };
        //     if(entryString.length == 6) {
        //         seventhChar.style.backgroundImage = "url('images/zero.svg')";
        //     };
        //     if(entryString.length == 7) {
        //         ninthChar.style.backgroundImage = "url('images/zero.svg')";
        //     };
        //     if(entryString.length == 8) {
        //         eleventhChar.style.backgroundImage = "url('images/zero.svg')";
        //     };
        // };
        if(entryString.includes('.') && entryString.charAt(0) == '.') {
            if (entryString.length == 2) {
                firstChar.style.backgroundImage = "url('images/zero.svg')"
            }
        }
    }
};
const unpressed0 = () => {
    button0.style.background = 'url(images/0.png)';
    button0.style.backgroundRepeat = 'no-repeat';
}
button0.addEventListener('mousedown', pressed0Anim);
button0.addEventListener('mousedown', pressed0);
button0.addEventListener('mouseup', unpressed0);
document.addEventListener("keydown", function(event) {
    if (event.key == '0') {
        pressed0Anim();
        pressed0();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == '0') {
      unpressed0();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key == 'Backspace') {
        pressedClearAnim();
        pressedClear();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == 'Backspace') {
      unpressedClear();
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
const pressedPointAnim = () => {
    buttonPoint.style.background = 'url(images/point-pressed.png)';
    buttonPoint.style.backgroundRepeat = 'no-repeat';
}

const pressedPoint = () => {
    if (!entryString.includes('.') && !savedData.includes('.')) {
        entryString = entryString + ".";
    };
    if (entryString.charAt(entryString.length-1) == ".") {
        if(entryString.length == 1) {
            thirteenthChar.style.backgroundImage = "url('images/dot.svg')";
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
    };
};

const secondaryPoint = () => {
    if (!entryString.includes('.')) {
        entryString = entryString + ".";
    };
    if (entryString.charAt(entryString.length-1) == ".") {
        if(entryString.length == 1) {
            thirteenthChar.style.backgroundImage = "url('images/dot.svg')";
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
    };
}

const unpressedPoint = () => {
    buttonPoint.style.background = 'url(images/point.png)';
    buttonPoint.style.backgroundRepeat = 'no-repeat';
}
buttonPoint.addEventListener('mousedown', pressedPointAnim);
buttonPoint.addEventListener('mousedown', pressedPoint);
buttonPoint.addEventListener('mouseup', unpressedPoint);
document.addEventListener("keydown", function(event) {
    if (event.key == '.') {
        pressedPointAnim();
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
const pressedClearAnim = () => {
    buttonClear.style.background = 'url(images/clear-pressed.png)';
    buttonClear.style.backgroundRepeat = 'no-repeat';
}
const pressedClear = () => {
    entryString = '';
    firstChar.style.backgroundImage = "url('images/num-blank.svg')";
    secondChar.style.backgroundImage = "url('images/dot-blank.svg')";
    thirdChar.style.backgroundImage = "url('images/num-blank.svg')";
    fourthChar.style.backgroundImage = "url('images/dot-blank.svg')";
    fifthChar.style.backgroundImage = "url('images/num-blank.svg')";
    sixthChar.style.backgroundImage = "url('images/dot-blank.svg')";
    seventhChar.style.backgroundImage = "url('images/num-blank.svg')";
    eighthChar.style.backgroundImage = "url('images/dot-blank.svg')";
    ninthChar.style.backgroundImage = "url('images/num-blank.svg')";
    tenthChar.style.backgroundImage = "url('images/dot-blank.svg')";
    eleventhChar.style.backgroundImage = "url('images/num-blank.svg')";
    twelfthChar.style.backgroundImage = "url('images/dot-blank.svg')";
    thirteenthChar.style.backgroundImage = "url('images/dot-blank.svg')";
};

const altClear = () => {
    if (saveCheck !== true) {
        savedData = entryString;
    };
    if (saveCheck == true) {
        savedData = savedData + entryString.charAt(entryString.length - 1)
    };
    if (savedData.slice(-2) !== entryString.slice(-2)) {
        savedData = savedData.substring(0, savedData.length - 1)
    };
    if (savedData.length > 6 && entryString.charAt(entryString.length-2) == ".") {
        savedData = savedData + "." + entryString.charAt(entryString.length-1)
    };
    if (savedData.indexOf('.') !== savedData.lastIndexOf('.')) {
        savedData = savedData.slice(0, -2)
    }
    saveCheck = true;
    entryString = '';
    firstChar.style.backgroundImage = "url('images/num-blank.svg')";
    secondChar.style.backgroundImage = "url('images/dot-blank.svg')";
    thirdChar.style.backgroundImage = "url('images/num-blank.svg')";
    fourthChar.style.backgroundImage = "url('images/dot-blank.svg')";
    fifthChar.style.backgroundImage = "url('images/num-blank.svg')";
    sixthChar.style.backgroundImage = "url('images/dot-blank.svg')";
    seventhChar.style.backgroundImage = "url('images/num-blank.svg')";
    eighthChar.style.backgroundImage = "url('images/dot-blank.svg')";
    ninthChar.style.backgroundImage = "url('images/num-blank.svg')";
    tenthChar.style.backgroundImage = "url('images/dot-blank.svg')";
    eleventhChar.style.backgroundImage = "url('images/num-blank.svg')";
    twelfthChar.style.backgroundImage = "url('images/dot-blank.svg')";
    thirteenthChar.style.backgroundImage = "url('images/dot-blank.svg')";
}
const unpressedClear = () => {
    buttonClear.style.background = 'url(images/clear.png)';
    buttonClear.style.backgroundRepeat = 'no-repeat';
}
buttonClear.addEventListener('mousedown', pressedClearAnim);
buttonClear.addEventListener('mousedown', pressedClear);
buttonClear.addEventListener('mouseup', unpressedClear);
document.addEventListener("keydown", function(event) {
    if (event.key == 'Delete') {
        pressedClearAnim();
        pressedClear();
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key == 'Delete') {
      unpressedClear();
    }
});