#! /usr/bin/env node

import inquirer from 'inquirer';

// Function to generate a random number between min and max (inclusive)
const generateRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Main function to run the game
const runGame = async () => {
  const min = 1;
  const max = 100;
  const randomNumber = generateRandomNumber(min, max);

  while (true) {
    const { guess } = await inquirer.prompt({
      name: 'guess',
      type: 'number',
      message: `Guess a number between ${min} and ${max}:`,
      validate: (input: number) => (input >= min && input <= max ? true : `Please enter a number between ${min} and ${max}.`),
    });

    if (guess === randomNumber) {
      console.log(`Congratulations! You guessed the number ${randomNumber}.`);
      break;
    } else {
      console.log(`Too ${guess < randomNumber ? 'low' : 'high'}! Try again.`);
    }
  }

  const { playAgain } = await inquirer.prompt({
    name: 'playAgain',
    type: 'confirm',
    message: 'Would you like to play again?',
  });

  if (playAgain) runGame();
  else console.log('Thank you for playing! Goodbye.');
};

// Run the game
runGame();
