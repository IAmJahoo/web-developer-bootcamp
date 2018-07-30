let colors;
let gameModeFactor = 6;
let pickedColor;
let pickedColorRGB;

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

let boxesListeners = function(squares) {
    for (i=0; i<gameModeFactor; i++) {
        squares[i].addEventListener('click', function() {
            let clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColorRGB) {
                alert(this.style.backgroundColor);
                // if correct change all other squares to this color
                // and display "Correct!!!""
            } else {
                alert('WRONG');
                this.classList.add('faded');
                // if not correct, fade box out and display "Try Again"
            }
        });
    }
};

let drawFromColors = () => {
    return colors[Math.floor(Math.random()*gameModeFactor)];
};

let boxes = document.querySelectorAll('.color-box');
let pickedColorText = document.getElementById('guess-color');

// give a choice to level

paintBoxes(boxes);
boxesListeners(boxes);
pickedColor = drawFromColors();
pickedColorText.textContent = pickedColor;
