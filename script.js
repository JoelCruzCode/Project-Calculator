const subBtn = document.querySelector(".substract");
const addBtn = document.querySelector(".add");
const multBtn = document.querySelector(".multiply");
const divBtn = document.querySelector(".divide");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const squareBtn = document.querySelector(".square-root");
const expBtn = document.querySelector(".exponent");
const caclculator = document.querySelector(".calculator");
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const exponent = (a, b) => {
  let sum = 1;
  for (i = 1; i <= b; i++) sum *= a;
  return sum;
};

const root = (a, b) => {};

const createNumbers = function () {
  for (i = 0; i < 10; i++) {
    let num = document.createElement("button");
    num.textContent = i;
    caclculator.append(num);
  }
};

createNumbers();
