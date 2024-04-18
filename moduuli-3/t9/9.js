// Get the input field and button elements
const inputField = document.getElementById('calculation');
const calculateButton = document.getElementById('start');
const resultElement = document.getElementById('result');

// Add a click event listener to the calculate button
calculateButton.addEventListener('click', () => {
    // Get the calculation input
    const calculation = inputField.value;


    // Split the calculation input
    const [operand1, operator, operand2] = calculation.split('');

    // Calculate the result based on the operator
    let result;
    switch (operator) {
        case '+':
            result = Number(operand1) + Number(operand2);
            break;
        case '-':
            result = Number(operand1) - Number(operand2);
            break;
        case '*':
            result = Number(operand1) * Number(operand2);
            break;
        case '/':
            result = Number(operand1) / Number(operand2);
            break;
        default:
            console.log('Invalid operator');
    }
    // Display the result
    resultElement.innerHTML = result;
});
