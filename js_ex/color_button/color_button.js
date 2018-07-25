let colors = ['#6b587a', '#4d89f0', '#f18f34', '#ffffff'];

let shuffleColors = (colorsTable) => {
    let buff = colorsTable.pop();
    colorsTable.unshift(buff);
};

let changeBackground = (colorsTable) => {
    let body = document.querySelector('body');
    let button = document.querySelector('button');

    button.addEventListener('click', () => {
            body.style.backgroundColor = colorsTable[0];
            shuffleColors(colorsTable);
            console.log('brawo Kasiu!!!');
    });
};

changeBackground(colors);
