#! /usr/bin/env node

import inquirer from "inquirer";

// Function to count characters excluding whitespaces
const countCharacters = (text: string): number => {
  return text.replace(/\s/g, "").length;
};

// Function to count words
const countWords = (text: string): number => {
  const words = text.trim().split(/\s+/);
  return words.filter((word) => word.length > 0).length;
};

// Main function to run the application
const runApp = async () => {
  const { paragraph } = await inquirer.prompt({
    name: "paragraph",
    type: "input",
    message: "Enter an English paragraph:",
  });

  const characterCount = countCharacters(paragraph);
  const wordCount = countWords(paragraph);

  console.log(`Character count (excluding whitespaces): ${characterCount}`);
  console.log(`Word count: ${wordCount}`);

  const { again } = await inquirer.prompt({
    name: "again",
    type: "confirm",
    message: "Would you like to analyze another paragraph?",
  });

  if (again) {
    runApp();
  } else {
    console.log("Goodbye!");
  }
};

// Run the application
runApp();
