// script.js
let currentFormula = '';
let correctResult = 0;

function generateFormula() {
    const type = Math.random() > 0.5 ? 'multiplication' : 'division';
    let num1 = (Math.floor(Math.random() * 90) + 10) + Math.random().toFixed(3);
    let num2 = (Math.floor(Math.random() * 90) + 10) + Math.random().toFixed(3);

    if (type === 'multiplication') {
        currentFormula = `${num1} * ${num2}`;
        correctResult = (parseFloat(num1) * parseFloat(num2)).toFixed(3);
    } else {
        num2 = Math.max(0.1, parseFloat(num2).toFixed(3)); // Ensure divisor is never zero and has at least one decimal place
        currentFormula = `${num1} / ${num2}`;
        correctResult = (parseFloat(num1) / parseFloat(num2)).toFixed(3);
    }

    document.getElementById('formula').textContent = currentFormula;
    document.getElementById('result-input').value = '';
    document.getElementById('result-check').textContent = '';
    document.getElementById('correct-result').textContent = '';
    document.getElementById('result-input').classList.remove('correct', 'incorrect');
}

function checkResult() {
    const inputVal = document.getElementById('result-input').value;
    if (inputVal === correctResult) {
        document.getElementById('result-input').classList.add('correct');
        document.getElementById('result-input').classList.remove('incorrect');
        document.getElementById('result-check').textContent = '✓';
        document.getElementById('result-check').style.color = 'green';
    } else {
        document.getElementById('result-input').classList.add('incorrect');
        document.getElementById('result-input').classList.remove('correct');
        document.getElementById('result-check').textContent = '✗';
        document.getElementById('result-check').style.color = 'red';
    }
}

function showCorrectResult() {
    document.getElementById('correct-result').textContent = `正确结果是: ${correctResult}`;
}

document.getElementById('result-input').addEventListener('blur', checkResult);
