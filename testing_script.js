let nums = ["1", "+", "2"]

let numsStr = nums.join('')
console.log(numsStr)
console.log(typeof numsStr);
let num = Number(numsStr)
console.log(num)
console.log(typeof num)

let array = ['1', '+', '2']
console.log(array)

let equation = 0

for (let el in array) {
  if (!isNaN(el)) {
    console.log("Yes")
    num = Number(el)
    equation += num
  // } else if (el === "+") {
  //   console.log("Plus sign")
  // }
}}
console.log(equation)

let eg = 1 + 0
console.log(eg)


// console.log(firstNum)
// firstNum += "4"
// console.log(firstNum); // prints 7



// let four = document.getElementById('4')
// four.addEventListener('click', ()=> {
  
  
//   content.textContent = "4"

// })

