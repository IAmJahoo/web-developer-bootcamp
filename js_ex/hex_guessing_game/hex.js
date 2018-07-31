let colors;
let gameModeFactor = 6;
let pickedColor;
let pickedColorRGB;

let hex2rgb = function(hexColor) {
    let hexRed = parseInt(hexColor.substr(1, 2), 16);
    let hexGreen = parseInt(hexColor.substr(3, 2), 16);
    let hexBlue = parseInt(hexColor.substr(5, 2), 16);

    return 'rgb(' + hexRed + ', ' + hexGreen + ', ' + hexBlue + ')';
};

let randomHexBaseColor = () => {
    const charTable = [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'a', 'b', 'c', 'd', 'e', 'f',
    ];
    const factor = charTable.length;
    let hexColor = '#';
    for (let i=0; i<6; i++) {
        hexColor += charTable[Math.floor(Math.random()*factor)];
    }

    return hexColor;
};

let createColorTable = () => {
    let colorTable = [];
    for (let i=0; i<gameModeFactor; i++) {
        colorTable.push(randomHexBaseColor());
    }

    return colorTable;
};

let paintBoxes = (squares) => {
    colors = createColorTable();
    for (let i=0; i<gameModeFactor; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
};

let changeOtherColors = (color) => {
    for (let i=0; i<gameModeFactor; i++) {
        boxes[i].style.backgroundColor = color;
    }
};

let boxesListeners = function(squares) {
    for (i=0; i<gameModeFactor; i++) {
        squares[i].addEventListener('click', function() {
            let clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColorRGB) {
                changeOtherColors(clickedColor);
                newColors.textContent = 'Play again?';
                displayMessage.textContent = 'Correct!!!';
                header.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = '#FEFEFE';
                displayMessage.textContent = 'Try Again';
            }
        });
    }
};

let drawFromColors = () => {
    return colors[Math.floor(Math.random()*gameModeFactor)];
};

let boxes = document.querySelectorAll('.color-box');
let pickedColorText = document.getElementById('guess-color');
let newColors = document.getElementById('new-colors');
let displayMessage = document.getElementById('guess-result');

// give a choice to level
// add new colors button logic
paintBoxes(boxes);
boxesListeners(boxes);
pickedColor = drawFromColors();
pickedColorRGB = hex2rgb(pickedColor);
pickedColorText.textContent = pickedColor;
