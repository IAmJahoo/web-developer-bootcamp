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

let drawFromColors = () => {
    return colors[Math.floor(Math.random()*gameModeFactor)];
};

let hideBottomBoxes = (squares) => {
    for (let i=3; i< squares.length; i++) {
        squares[i].style.display = 'none';
    }
};

let showBottomBoxes = (squares) => {
    for (let i=3; i< squares.length; i++) {
        squares[i].style.display = 'block';
    }
};

let boxesListeners = function(squares) {
    for (let i=0; i<gameModeFactor; i++) {
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

const boxes = document.querySelectorAll('.color-box');
const pickedColorText = document.getElementById('guess-color');
const newColors = document.getElementById('new-colors');
const displayMessage = document.getElementById('guess-result');
const pageButtons = document.querySelectorAll('button');
const hardButton = document.getElementById('hard');
const easyButton = document.getElementById('easy');

hardButton.addEventListener('click', () => {
    if (!hardButton.classList.contains('checked')) {
        hardButton.classList.add('checked');
        easyButton.classList.remove('checked');
        gameModeFactor = 6;
        initGame();
        showBottomBoxes(boxes);
    }
});

easyButton.addEventListener('click', () => {
    if (!easyButton.classList.contains('checked')) {
        easyButton.classList.add('checked');
        hardButton.classList.remove('checked');
        gameModeFactor = 3;
        initGame();
        hideBottomBoxes(boxes);
    }
});

pageButtons.forEach((btn) => {
    btn.addEventListener('mouseover', () => {
        btn.classList.add('over');
    });
});

pageButtons.forEach((btn) => {
    btn.addEventListener('mouseleave', () => {
        btn.classList.remove('over');
    });
});

newColors.addEventListener('click', () => {
    initGame();
});

/**
 * Initialize the game
 */
function initGame() {
    paintBoxes(boxes);
    pickedColor = drawFromColors();
    pickedColorRGB = hex2rgb(pickedColor);
    pickedColorText.textContent = pickedColor;
    displayMessage.textContent = '';
    header.style.backgroundColor = '#2CAAAA';
    newColors.textContent = 'New colors?';
}

initGame();
boxesListeners(boxes);
