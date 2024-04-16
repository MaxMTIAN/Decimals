let currentResult = 0;

function generateFormula() {
    if (Math.random() < 0.5) {
        // Generate multiplication formula
        let num1 = getRandomNumber();
        let num2 = getRandomNumber();
        document.getElementById('formula').textContent = `${num1} × ${num2} = `;
        currentResult = parseFloat((num1 * num2).toFixed(3));
    } else {
        // Generate division formula
        let dividend = getRandomNumber();
        let divisor = getRandomDivisor(dividend);
        document.getElementById('formula').textContent = `${dividend} ÷ ${divisor} = `;
        currentResult = parseFloat((dividend / divisor).toFixed(3));
    }
    document.getElementById('resultInput').value = "";
    document.getElementById('resultInput').style.borderColor = "";
    document.getElementById('resultIcon').innerHTML = "";
}

function getRandomNumber() {
    return parseFloat((Math.random() * 99 + 0.001).toFixed(3));
}

function getRandomDivisor(dividend) {
    let divisor;
    do {
        divisor = parseFloat((Math.random() * 9 + 0.1).toFixed(3));
    } while (divisor > dividend || dividend % divisor !== 0 || divisor.toString().endsWith('0'));
    return divisor;
}

function checkResult() {
    const userInput = parseFloat(document.getElementById('resultInput').value);
    if (userInput === currentResult) {
        document.getElementById('resultInput').style.borderColor = "green";
        document.getElementById('resultIcon').innerHTML = "✔️";
        document.getElementById('resultIcon').style.color = "green";
    } else {
        document.getElementById('resultInput').style.borderColor = "red";
        document.getElementById('resultIcon').innerHTML = "❌";
        document.getElementById('resultIcon').style.color = "red";
    }
}
