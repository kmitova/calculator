// VARIABLES

let content = document.getElementById("content");
const numbers = document.querySelectorAll(".num");
const equalsBtn = document.getElementById("equals");
const clearBtn = document.getElementById("ac");
const changeSign = document.getElementById("plus-minus");
const operators = document.querySelectorAll(".operator");

let operator;
let num = 0;
let firstNum = "";
let secondNum = "";
let value;
let firstNumTurn = true;
let secondNumTurn = false;
let decimalAllowed = true;
let previousDigit = "";

// EVENTS

changeSign.addEventListener("click", () => {
  if (firstNumTurn) {
    firstNum = -firstNum;
    content.textContent = firstNum;
  }
  if (secondNumTurn) {
    secondNum = -secondNum;
    content.textContent = secondNum;
  }
});

clearBtn.addEventListener("click", clear);

equalsBtn.addEventListener("click", () => {
  if (firstNum != "" && secondNum !== "") {
    result = operate(operator, firstNum, secondNum);
    if (result.toString().length > 10) {
      content.textContent = result.toFixed(6);
    } else {
      content.textContent = result;
    }
    firstNum = result;
    firstNumTurn = false;
    secondNumTurn = true;
    secondNum = "";
  }
});

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    let digit = e.target.innerText;
    if (digit === "." && previousDigit === ".") {
      alert("Cannot have a decimal point after another.");
    } else {
      if (firstNumTurn) {
        if (content.textContent === "0") {
          content.textContent = digit;
        } else {
          content.textContent += digit;
        }
        value = appendNumber(digit);
        firstNum = Number(value);
      }
      if (secondNumTurn) {
        if (
          content.textContent === "0" ||
          content.textContent === "+" ||
          content.textContent === "-" ||
          content.textContent === "*" ||
          content.textContent === "/"
        ) {
          content.textContent = digit;
        } else {
          content.textContent += digit;
        }
        value = "";
        value = appendNumber(digit);
        secondNum = Number(value);
      }
    }
    previousDigit = digit;
  });
});

operators.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", (e) => {
    if (firstNum !== "") {
      let sign = e.target.id;

      switch (sign) {
        case "add":
          sign = "+";
          break;
        case "multiply":
          sign = "*";
          break;
        case "substract":
          sign = "-";
          break;
        case "divide":
          sign = "/";
          break;
        case "equals":
          sign = "=";
          break;
        case "percent":
          sign = "%";
          break;
        default:
          break;
      }
      content.textContent = sign;
      operator = getOperator(sign);
    }
  });
});

// FUNCTIONS

function clear() {
  content.textContent = 0;
  result = 0;
  firstNum = "";
  secondNum = "";
  firstNumTurn = true;
  secondNumTurn = false;
  num = 0;
}

function getOperator(op) {
  firstNumTurn = false;
  secondNumTurn = true;
  return op;
}

let counter = 0;
function appendNumber(d) {
  counter = 0;
  if (secondNumTurn && secondNum === "") {
    num = 0;
    counter += 1;
  }
  if (num === 0) {
    num = d;
  } else {
    console.log(d);
    num += d;
  }
  return num;
}

function operate(op, n1, n2) {
  let result = 0;
  n1 = Number(n1);
  n2 = Number(n2);
  switch (op) {
    case "+":
      result = addition(n1, n2);
      break;
    case "-":
      result = subtraction(n1, n2);
      break;
    case "*":
      result = multiplication(n1, n2);
      break;
    case "/":
      result = division(n1, n2);
      break;
    case "%":
      result = percent(n1, n2);
      break;
    default:
      break;
  }
  return result;
}

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    alert("Cannot divide by 0!");
    clear();
    current.innerText = "0";
    return;
  }
  return b / y;
}

function percent(a, b) {
  return a * (b / 100);
}
