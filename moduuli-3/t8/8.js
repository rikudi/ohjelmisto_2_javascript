const dropdown = document.getElementById('operation');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');

function performOperation() {
    const operation = dropdown.value;
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = document.querySelector('#result')

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operation';
    }

    result.innerHTML = result;
}

const button = document.getElementById('start');
button.addEventListener('click', performOperation);
