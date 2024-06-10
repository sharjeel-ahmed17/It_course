#! /usr/bin/env node
import inquirer from 'inquirer';
// Generate a random account for demonstration purposes
const generateRandomAccount = () => {
    const id = (Math.floor(Math.random() * 90000) + 10000).toString(); // 5-digit user ID
    const pin = (Math.floor(Math.random() * 9000) + 1000).toString(); // 4-digit PIN
    const balance = Math.floor(Math.random() * 10000); // Random balance between 0 and 9999
    return { id, pin, balance };
};
const account = generateRandomAccount();
let authenticated = false;
// Function to log in
const login = async () => {
    const answers = await inquirer.prompt([
        {
            name: 'id',
            type: 'input',
            message: 'Enter your user ID:',
        },
        {
            name: 'pin',
            type: 'password',
            message: 'Enter your PIN:',
            mask: '*',
        },
    ]);
    if (answers.id === account.id && answers.pin === account.pin) {
        authenticated = true;
        console.log('Login successful!');
    }
    else {
        console.log('Invalid user ID or PIN. Please try again.');
    }
};
// Function to view balance
const viewBalance = () => {
    console.log(`Your current balance is: $${account.balance}`);
};
// Function to deposit money
const depositMoney = async () => {
    const { amount } = await inquirer.prompt({
        name: 'amount',
        type: 'number',
        message: 'Enter amount to deposit:',
        validate: (input) => (input > 0 ? true : 'Please enter a valid amount.'),
    });
    account.balance += amount;
    console.log(`Deposited $${amount}. New balance is $${account.balance}`);
};
// Function to withdraw money
const withdrawMoney = async () => {
    const { amount } = await inquirer.prompt({
        name: 'amount',
        type: 'number',
        message: 'Enter amount to withdraw:',
        validate: (input) => (input > 0 ? true : 'Please enter a valid amount.'),
    });
    if (amount > account.balance) {
        console.log('Insufficient balance!');
    }
    else {
        account.balance -= amount;
        console.log(`Withdrew $${amount}. New balance is $${account.balance}`);
    }
};
// Main menu
const mainMenu = async () => {
    const { action } = await inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'Choose an action:',
        choices: ['View Balance', 'Deposit Money', 'Withdraw Money', 'Exit'],
    });
    switch (action) {
        case 'View Balance':
            viewBalance();
            break;
        case 'Deposit Money':
            await depositMoney();
            break;
        case 'Withdraw Money':
            await withdrawMoney();
            break;
        case 'Exit':
            console.log('Goodbye!');
            return;
    }
    mainMenu(); // Show the menu again after an action
};
// Run the application
const runApp = async () => {
    console.log(`Generated User ID: ${account.id}, PIN: ${account.pin}`);
    await login();
    if (authenticated) {
        mainMenu();
    }
    else {
        runApp(); // Retry login if authentication failed
    }
};
runApp();
