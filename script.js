const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.keys');
const display = calculator.querySelector('.display');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;

    if (!action) {
      if (displayedNum === '0') {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }

    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
      display.textContent = displayedNum + ' ' + keyContent + ' ';
    }

    if (action === 'decimal') {
      display.textContent = displayedNum + '.';
    }

    if (action === 'clear') {
      display.textContent = '0';
    }

    if (action === 'calculate') {
      const calculation = displayedNum.split(' ');
      const operator = calculation[1];
      const firstNum = parseFloat(calculation[0]);
      const secondNum = parseFloat(calculation[2]);
      let result = '';

      if (operator === '+') {
        result = firstNum + secondNum;
      } else if (operator === '-') {
        result = firstNum - secondNum;
      } else if (operator === '*') {
        result = firstNum * secondNum;
      } else if (operator === '/') {
        result = firstNum / secondNum;
      }

      display.textContent = result;
    }
  }
});