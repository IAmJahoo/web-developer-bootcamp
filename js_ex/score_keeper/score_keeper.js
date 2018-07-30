const p1Button = document.querySelector('#p1');
const p2Button = document.querySelector('#p2');
const resetButton = document.querySelector('#reset');
const p1result = document.querySelector('h1 > #p1r');
const p2result = document.querySelector('h1 > #p2r');
const numInput = document.querySelector('input[type="number"]');
const scoreForGreen = document.querySelector('#winning-score');

let p1score = 0;
let p2score = 0;
let isGameOver = false;
let winningScore = 5;

p1Button.addEventListener('click', () => {
    if (!isGameOver) {
        p1score++;
        if (p1score === winningScore) {
            p1result.classList.toggle('winner');
            isGameOver = true;
        }
        p1result.textContent = p1score;
    }
});

p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        p2score++;
        if (p2score === winningScore) {
            p2result.classList.toggle('winner');
            isGameOver = true;
        }
        p2result.textContent = p2score;
    }
});

resetButton.addEventListener('click', () => {
    p1score = p2score = 0;
    isGameOver = false;
    p1result.textContent = p1score;
    p1result.classList.remove('winner');
    p2result.textContent = p2score;
    p2result.classList.remove('winner');
});

numInput.addEventListener('input', () => {
    winningScore = Number(this.value);
    scoreForGreen.textContent = this.value;
});
