#! /usr/bin/env node

import inquirer from "inquirer";

// Define a type for a Question
type Question = {
  question: string;
  choices: string[];
  correctAnswer: string;
};

// Sample questions
const questions: Question[] = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the largest planet in our Solar System?",
    choices: ["Earth", "Jupiter", "Saturn", "Mars"],
    correctAnswer: "Jupiter",
  },
  {
    question: "Which element has the chemical symbol O?",
    choices: ["Gold", "Oxygen", "Osmium", "Oganesson"],
    correctAnswer: "Oxygen",
  },
  // Add more questions as needed
];

class Quiz {
  private questions: Question[];
  private score: number = 0;

  constructor(questions: Question[]) {
    this.questions = questions;
  }

  public async start() {
    for (const question of this.questions) {
      const { answer } = await inquirer.prompt({
        name: "answer",
        type: "list",
        message: question.question,
        choices: question.choices,
      });

      if (answer === question.correctAnswer) {
        console.log("Correct!");
        this.score++;
      } else {
        console.log(`Wrong! The correct answer is ${question.correctAnswer}.`);
      }
    }

    this.showResults();
  }

  private showResults() {
    console.log(
      `\nQuiz Over! You scored ${this.score} out of ${this.questions.length}.`
    );
  }
}

const mainMenu = async () => {
  const quiz = new Quiz(questions);
  await quiz.start();

  const { again } = await inquirer.prompt({
    name: "again",
    type: "confirm",
    message: "Would you like to take the quiz again?",
  });

  if (again) {
    mainMenu();
  } else {
    console.log("Goodbye!");
  }
};

// Run the application
mainMenu();
