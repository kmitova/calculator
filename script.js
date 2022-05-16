// VARIABLES
let firstNum = 0
let secondNum = 0
let num
let isFirstNum = true
let isSecondNum = false
let operatorType
const numbers = document.querySelectorAll('.num')
let digit
let displayContent
let content = document.getElementById('content')
const operators = document.querySelectorAll('.operator')
const equalsBtn = document.getElementById("equals");
let selectedOperator = false
let result = 0

// let decimalPointSelected = false
// let decimalPointCounter = 0

if (isFirstNum) {
  numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
      digit = e.target.id;
      // console.log(digit);
      if (content.textContent === "0") {
        content.textContent = digit;
      } else {
        content.textContent += digit;
      }
      num = content.textContent;
      // console.log(num);
    });
  });
}

// console.log(num)

if (isSecondNum) {
  numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
      // content.textContent = 0
      digit = e.target.id;
      console.log(digit);

      if (content.textContent !== '0') {
        content.textContent = digit;
      } else {
        content.textContent += digit;
      }
      num = content.textContent;
      // console.log(num);
    });
  });
}

operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    operatorType = e.target.id
    console.log(operatorType)
    selectedOperator = true
    
    if (isFirstNum) {
      firstNum = Number(num) // get the first number
      console.log("the first num is " + firstNum)
      num = 0
      content.textContent = 0
      isFirstNum = false
      isSecondNum = true
      
    }
    else if (isSecondNum) {
      secondNum = Number(num)
      console.log("the second num is " + secondNum)
      num = 0
      content.textContent = 0
      isSecondNum = false
      isFirstNum = true
      
    }
    console.log(firstNum)
    console.log(secondNum)
    if (operatorType == "add") {
      console.log("addition selected")
      result = Number(firstNum + secondNum)
      console.log(result)
      content.textContent = result
      firstNum = result
      secondNum = 0
    }
    // FIGURE OUT HOW TO MAKE THE CONTENT ZERO WHEN ADDING THE SECOND NUM

    // content.textContent = 0
    // return operatorType
    // console.log(operatorType)
  })
})

// function addition(firstNum, secondNum) {
//   console.log(firstNum + secondNum)
//   return firstNum + secondNum
// }
