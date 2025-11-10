const calculatorDisplay = document.getElementById("display");
const operators = ["+", "-", "/", "*"];
function addValue(value) {
    if (calculatorDisplay.value === "0") {
        calculatorDisplay.value = value;
        return
    } 
    calculatorDisplay.value += value;
};
function addOperator(operator) {
    const expression = calculatorDisplay.value;
    const lastCharacter = expression.at(-1);
    if (operators.includes(lastCharacter)) {
        calculatorDisplay.value = expression.slice(0, -1) + operator;
    } else {
        calculatorDisplay.value += operator;
    };
};
function result() {
    const expression = calculatorDisplay.value;
    const lastCharacter = expression.at(-1);
    if (operators.includes(lastCharacter)) {
        calculatorDisplay.value += 0;
        calculatorDisplay.value = math.evaluate(calculatorDisplay.value);
    } else {
        calculatorDisplay.value = math.evaluate(calculatorDisplay.value);
    };
};
function clearDisplay() {
    calculatorDisplay.value = 0;
};