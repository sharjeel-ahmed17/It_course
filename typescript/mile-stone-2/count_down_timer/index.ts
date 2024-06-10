#! /usr/bin/env node

import inquirer from "inquirer";

// Function to format the remaining time as HH:MM:SS
const formatTime = (milliseconds: number): string => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
};

// Function to start the countdown
const startCountdown = (duration: number) => {
  const endTime = new Date().getTime() + duration;

  const timer = setInterval(() => {
    const remainingTime = endTime - new Date().getTime();

    if (remainingTime <= 0) {
      clearInterval(timer);
      console.log("\nCountdown complete!");
    } else {
      process.stdout.write(`\rTime remaining: ${formatTime(remainingTime)}`);
    }
  }, 1000);
};

// Main function to run the application
const runApp = async () => {
  const { hours, minutes, seconds } = await inquirer.prompt([
    {
      name: "hours",
      type: "number",
      message: "Enter hours:",
      default: 0,
      validate: (input: number) =>
        input >= 0 ? true : "Please enter a valid number of hours.",
    },
    {
      name: "minutes",
      type: "number",
      message: "Enter minutes:",
      default: 0,
      validate: (input: number) =>
        input >= 0 ? true : "Please enter a valid number of minutes.",
    },
    {
      name: "seconds",
      type: "number",
      message: "Enter seconds:",
      default: 0,
      validate: (input: number) =>
        input >= 0 ? true : "Please enter a valid number of seconds.",
    },
  ]);

  const totalMilliseconds = (hours * 3600 + minutes * 60 + seconds) * 1000;

  if (totalMilliseconds > 0) {
    console.log(
      `\nStarting countdown for ${formatTime(totalMilliseconds)}...\n`
    );
    startCountdown(totalMilliseconds);
  } else {
    console.log("Please enter a duration greater than 0.");
    runApp();
  }
};

// Run the application
runApp();
