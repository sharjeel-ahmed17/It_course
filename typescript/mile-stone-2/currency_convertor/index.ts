#! /usr/bin/env node

import inquirer from "inquirer";

// Define a type for currency rates
type CurrencyRates = {
  [key: string]: number;
};

// Sample currency rates relative to USD
const currencyRates: CurrencyRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
  JPY: 110,
  AUD: 1.35,
  CAD: 1.25,
};

const convertCurrency = (amount: number, from: string, to: string): number => {
  const fromRate = currencyRates[from];
  const toRate = currencyRates[to];
  if (fromRate && toRate) {
    return (amount / fromRate) * toRate;
  } else {
    throw new Error("Invalid currency code");
  }
};

const mainMenu = async () => {
  const { amount, from, to } = await inquirer.prompt([
    {
      name: "amount",
      type: "number",
      message: "Enter the amount to convert:",
      validate: (input: number) =>
        input > 0 ? true : "Please enter a valid amount.",
    },
    {
      name: "from",
      type: "list",
      message: "Convert from:",
      choices: Object.keys(currencyRates),
    },
    {
      name: "to",
      type: "list",
      message: "Convert to:",
      choices: Object.keys(currencyRates),
    },
  ]);

  try {
    const result = convertCurrency(amount, from, to);
    console.log(`${amount} ${from} is equal to ${result.toFixed(2)} ${to}`);
  } catch (error) {
    console.log(error);
  }

  const { again } = await inquirer.prompt({
    name: "again",
    type: "confirm",
    message: "Would you like to convert another amount?",
  });

  if (again) {
    mainMenu();
  } else {
    console.log("Goodbye!");
  }
};

// Run the application
mainMenu();
