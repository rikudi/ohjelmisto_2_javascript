const dropdown = document.getElementById('operation');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');

function performOperation() {
    const operation = dropdown.value;
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const resultElement = document.getElementById('result');

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'multi':
            result = num1 * num2;
            break;
        case 'div':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operation';
    }

    resultElement.innerHTML = result;
}

const button = document.getElementById('start');
button.addEventListener('click', performOperation);
