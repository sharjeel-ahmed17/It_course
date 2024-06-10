#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
// Function to add a todo
const addTodo = async () => {
    const answers = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Todo task:",
        },
    ]);
    const newTodo = {
        id: todos.length + 1,
        task: answers.task,
        completed: false,
    };
    todos.push(newTodo);
    console.log("Todo added successfully!");
};
// Function to view todos
const viewTodos = () => {
    if (todos.length === 0) {
        console.log("No todos to display.");
        return;
    }
    console.log("List of Todos:");
    todos.forEach((todo) => {
        console.log(`ID: ${todo.id}, Task: ${todo.task}, Completed: ${todo.completed}`);
    });
};
// Function to mark a todo as completed
const markTodoAsCompleted = async () => {
    if (todos.length === 0) {
        console.log("No todos to mark as completed.");
        return;
    }
    const answers = await inquirer.prompt([
        {
            name: "id",
            type: "number",
            message: "Enter the todo ID to mark as completed:",
        },
    ]);
    const id = answers.id;
    const todo = todos.find((t) => t.id === id);
    if (todo) {
        todo.completed = true;
        console.log("Todo marked as completed!");
    }
    else {
        console.log("Todo not found!");
    }
};
// Function to delete a todo
const deleteTodo = async () => {
    if (todos.length === 0) {
        console.log("No todos to delete.");
        return;
    }
    const answers = await inquirer.prompt([
        {
            name: "id",
            type: "number",
            message: "Enter the todo ID to delete:",
        },
    ]);
    const id = answers.id;
    todos = todos.filter((todo) => todo.id !== id);
    console.log("Todo deleted successfully!");
};
// Main menu
const mainMenu = async () => {
    const answers = await inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: "Choose an action:",
            choices: [
                "Add Todo",
                "View Todos",
                "Mark Todo as Completed",
                "Delete Todo",
                "Exit",
            ],
        },
    ]);
    switch (answers.action) {
        case "Add Todo":
            await addTodo();
            break;
        case "View Todos":
            viewTodos();
            break;
        case "Mark Todo as Completed":
            await markTodoAsCompleted();
            break;
        case "Delete Todo":
            await deleteTodo();
            break;
        case "Exit":
            console.log("Goodbye!");
            return;
    }
    mainMenu(); // Show the menu again after an action
};
// Run the application
mainMenu();
