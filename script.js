document.getElementById('generate').addEventListener('click', generateFormula);
document.getElementById('result').addEventListener('blur', validateResult);
document.getElementById('showResult').addEventListener('click', showCorrectResult);

let currentResult = 0;

function generateFormula() {
  const type = Math.random() < 0.5 ? 'multiplication' : 'division';
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber(type === 'division');
  const formulaElement = document.getElementById('formula');

  if (type === 'multiplication') {
    currentResult = num1 * num2;
    formulaElement.textContent = `${num1} * ${num2} =`;
  } else { // division
    currentResult = num1 / num2;
    formulaElement.textContent = `${num1} / ${num2} =`;
  }
  document.getElementById('result').className = 'result-input';
  document.querySelector('.space').textContent = '';
}

function validateResult() {
  const userResult = parseFloat(document.getElementById('result').value);
  const resultElement = document.getElementById('result');
  if (userResult === currentResult) {
    resultElement.classList.add('correct');
    resultElement.classList.remove('incorrect');
    resultElement.nextSibling.textContent = '✔️';
  } else {
    resultElement.classList.add('incorrect');
    resultElement.classList.remove('correct');
    resultElement.nextSibling.textContent = '❌';
  }
}

function showCorrectResult() {
  const space = document.querySelector('.space');
  space.textContent = `Correct result: ${currentResult.toFixed(3)}`;
}

function generateRandomNumber(division = false) {
  const max = 99.999;
  const min = 0.001;
  let number = (Math.random() * (max - min) + min).toFixed(3);
  if (division) {
    while (number.includes('0')) {
      number = (Math.random() * (max - min) + min).toFixed(3);
    }
  }
  return parseFloat(number);
}
