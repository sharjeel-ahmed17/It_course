#!/usr/bin/env node
import inquirer from "inquirer";
class BankAccount {
    accountNumber;
    balance;
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        if (this.balance > 100) {
            amount -= 1; // assuming a fee of 1 is charged for deposits
        }
        this.balance += amount;
        console.log(`Deposit of ${amount} successful. Remaining balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawal of ${amount} successful. Remaining balance: ${this.balance}`);
        }
        else {
            console.log("Insufficient balance");
        }
    }
    checkBalance() {
        console.log(`Current balance: ${this.balance}`);
    }
}
class Customer {
    firstName;
    lastName;
    gender;
    age;
    mobileNumber;
    account;
    constructor(firstName, lastName, gender, age, mobileNumber, account) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.account = account;
    }
}
// Create a new bank account
const accounts = [
    new BankAccount(10001, 100),
    new BankAccount(1002, 200),
    new BankAccount(1003, 300),
];
const customers = [
    new Customer("John", "Doe", "Male", 20, 1234567890, accounts[0]),
    new Customer("Jane", "Doe", "Female", 20, 1234567890, accounts[1]),
    new Customer("Mary", "Doe", "Female", 20, 1234567890, accounts[2]),
];
const startFunction = async () => {
    do {
        const accountNumberInputs = await inquirer.prompt([
            {
                message: "Enter account number",
                type: "number",
                name: "accountNumber",
            },
        ]);
        const customer = customers.find((customer) => customer.account.accountNumber === accountNumberInputs.accountNumber);
        if (!customer) {
            console.log("Invalid account number");
            continue;
        }
        if (customer) {
            console.log(`welcome ${customer.firstName} ${customer.lastName}\n
        `);
            const answer = await inquirer.prompt([
                {
                    name: "operation",
                    type: "list",
                    message: "What would you like to do?",
                    choices: ["Deposit", "Withdraw", "Check Balance", "exit"],
                },
            ]);
            switch (answer.operation) {
                case "Deposit":
                    const depositInput = await inquirer.prompt([
                        {
                            name: "amount",
                            type: "number",
                            message: "How much would you like to deposit?",
                        },
                    ]);
                    customer.account.deposit(depositInput.amount);
                    break;
                case "Withdraw":
                    const withdrawInput = await inquirer.prompt([
                        {
                            name: "amount",
                            type: "number",
                            message: "How much would you like to withdraw?",
                        },
                    ]);
                    customer.account.withdraw(withdrawInput.amount);
                    break;
                case "Check Balance":
                    customer.account.checkBalance();
                    break;
                case "exit":
                    console.log("Thank you for banking with us");
                    return;
                default:
                    console.log("Invalid operation");
                    break;
            }
        }
        else {
            console.log("Invalid account number");
        }
    } while (true);
};
startFunction();
