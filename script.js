// To do List:
// 1.) seperate equal button from event listener // Finished
// 2.) make calculate work // Finished
// 3.) add exponent and modulo/squareroot functionality/

let firstNum = ``;
let secondNum = ``;
let operation = ``;
let sum;

const numbers = document.querySelectorAll(".number");
const subBtn = document.querySelector(".subtract");
const addBtn = document.querySelector(".add");
const multBtn = document.querySelector(".multiply");
const divBtn = document.querySelector(".divide");
const arithmetics = [subBtn, addBtn, multBtn, divBtn];
//
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const display = document.querySelector(".display");

// Math Operations
const add = (a, b) => Number(a) + Number(b);

const subtract = (a, b) => Number(a) - Number(b);

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = function (
  operator = operation,
  num1 = firstNum,
  num2 = secondNum
) {
  if (operator === "-") {
    sum = subtract(num1, num2);
  } else if (operator === "+") {
    sum = add(num1, num2);
  } else if (operator === "*") {
    sum = multiply(num1, num2);
  } else if (operator === "/") {
    sum = divide(num1, num2);
  }
  console.log(sum);
  return sum;
};

const displayContent = function (content) {
  display.textContent = content;
};

const clear = function () {
  display.textContent = ``;
  firstNum = "";
  secondNum = "";
  operation = "";
  sum = "";
};

// Event Listeners
arithmetics.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (sum) {
      firstNum = sum;
    }
    operation = e.target.textContent;
    displayContent(`${firstNum} ${operation} `);
  })
);

numbers.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (!operation) {
      firstNum += e.target.textContent;
      displayContent(firstNum);
    } else {
      secondNum += e.target.textContent;
      displayContent(`${firstNum} ${operation} ${secondNum}`);
    }
  })
);

clearBtn.addEventListener("click", clear);

equalBtn.addEventListener("click", function (e) {
  operate(operation, firstNum, secondNum);
  displayContent(`${firstNum} ${operation} ${secondNum} = ${sum}`);
  secondNum = "";
});

//////////////////////////////////////////////////////////

// const createNumbers = function () {
//   for (i = 0; i < 10; i++) {
//     let num = document.createElement("button");
//     num.textContent = i;
//     caclculator.append(num);
//   }
// };

// const exponent = (a, b) => {
//     let sum = 1;
//     for (i = 1; i <= b; i++) sum *= a;
//     return sum;
//   };

//   const root = (a, b) => {};

// createNumbers();

/////////////////////

// const buttons = document.querySelectorAll("button");
// const squareBtn = document.querySelector(".square-root");
// const expBtn = document.querySelector(".exponent");
//
// const displayContent = function (content) {
//     display.textContent += ` ${content}`;
//   };
//   // Event Listeners
//   buttons.forEach((btn) =>
//     btn.addEventListener("click", function (e) {
//       if (e.target.className != "number") {
//         operation = e.target.textContent;
//         displayContent(operation);
//       } else if ((e.target.className = "number")) {
//         if (!firstNum) {
//           firstNum = e.target.textContent;
//           displayContent(firstNum);
//         } else {
//           secondNum = e.target.textContent;
//           displayContent(secondNum);
//         }
//       }
//     })
//   );
