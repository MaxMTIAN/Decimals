let currentResult = 0; // 用来存储当前公式的正确结果

function generateFormula() {
    if (Math.random() < 0.5) {
        // 生成乘法公式
        let num1 = getRandomNumber();
        let num2 = getRandomNumber();
        document.getElementById('formula').textContent = `${num1} × ${num2}`;
        currentResult = parseFloat((num1 * num2).toFixed(3)); // 保留三位小数
    } else {
        // 生成除法公式
        let dividend = getRandomNumber();
        let divisor = getRandomDivisor(dividend);
        document.getElementById('formula').textContent = `${dividend} ÷ ${divisor}`;
        currentResult = parseFloat((dividend / divisor).toFixed(3)); // 保留三位小数
    }
    document.getElementById('resultInput').value = ""; // 清空输入框
    document.getElementById('resultInput').style.borderColor = ""; // 重置边框颜色
    document.getElementById('correctResult').textContent = ""; // 清空结果显示区
}

function getRandomNumber() {
    // 生成一个小数点前1位或2位且小数点后3位的随机数
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
        document.getElementById('correctResult').innerHTML = "✔️ 正确";
    } else {
        document.getElementById('resultInput').style.borderColor = "red";
        document.getElementById('correctResult').innerHTML = "❌ 错误";
    }
}

function showCorrectResult() {
    document.getElementById('correctResult').textContent = `正确结果: ${currentResult}`;
}
