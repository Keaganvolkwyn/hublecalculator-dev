// restult input fields display 0 as a default in and logged entries are stored in an array
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// the calculator function takes in 3 params and constantly stores the number/operator 
// and then takes in 2 params and calls the function
function createAndWriteOutput(initialResult, operator, enteredNumber) {
  const calculationDescription = `${initialResult} ${operator} ${enteredNumber}`;
  outputResult(currentResult, calculationDescription);
}

// create a history log that implements the previous result number with an operation that displays a new result  e.g."1+1=2 then last number 2 and operator "*" 4(last answer times 4)"
function writeToLog(operationIdentifier, number, initialResult, currentResult) {
  const logEntry = {
    operatortion: operationIdentifier,
    enteredNumber: number,
    prevResult: initialResult,
    result: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

// function calculates the previous result and the next operator and number input
function calculateResult(calculationType) {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === "DIVIDE" && enteredNumber == 0) {
    // consolog warning message
    console.warn("Cannot divide by 0");

    // return the current result and the operation selected that sums up answer for the next number entered
    return;
  }

  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  } else {
    // return console log warning
    console.warn(
      "calcutionType must be ['ADD', 'SUBTRACT', 'MULTIPLY', 'DIVIDE']"
    );

    return;
  }

// create and write an output of the current result thats calculated with the next operator key and number entered giving a new current result 
  createAndWriteOutput(initialResult, mathOperator, enteredNumber);
  writeToLog(calculationType, enteredNumber, initialResult, currentResult);
}

// addition function represented by "+"
function add() {
  calculateResult("ADD");
}

// subtraction function represented by "-"
function subtract() {
  calculateResult("SUBTRACT");
}

// multiplication function represented by "*"
function multiply() {
  calculateResult("MULTIPLY");
}

// division function represented by "/"
function divide() {
  calculateResult("DIVIDE");
}

// button EventListeners for the above operator functions when clicked
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
