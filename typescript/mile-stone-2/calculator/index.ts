#! /usr/bin/env node

import inquirer from "inquirer";

let answer = await inquirer.prompt([
  { message: "enter First number", type: "number", name: "firstNumber" },
  { message: "enter Second number", type: "number", name: "secondNumber" },
  {
    message: "enter operation",
    type: "list",
    name: "operation",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);
// console.log(answer);
// console.log(`your number is ${answer.firstNumber}`);

if (answer.operation === "addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operation === "subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operation === "multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operation === "division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("invalid a valid operator");
}
