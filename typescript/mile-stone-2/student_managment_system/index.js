#! /usr/bin/env node
import inquirer from "inquirer";
// Define a class for Student
class Student {
    static idCounter = 10000;
    id;
    name;
    courses = [];
    balance = 0;
    tuitionFee = 1000; // Assume each course costs 1000
    constructor(name) {
        this.name = name;
        this.id = Student.generateUniqueId();
    }
    static generateUniqueId() {
        return this.idCounter++;
    }
    enroll(course) {
        if (!this.courses.includes(course)) {
            this.courses.push(course);
            this.balance += this.tuitionFee;
            console.log(`${this.name} has enrolled in ${course}.`);
        }
        else {
            console.log(`${this.name} is already enrolled in ${course}.`);
        }
    }
    viewBalance() {
        console.log(`${this.name}'s balance: $${this.balance}`);
    }
    payTuition(amount) {
        if (amount > this.balance) {
            console.log(`Amount exceeds balance. Only $${this.balance} needed.`);
        }
        else {
            this.balance -= amount;
            console.log(`Payment of $${amount} received. Remaining balance: $${this.balance}`);
        }
    }
    showStatus() {
        console.log(`Student ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Courses Enrolled: ${this.courses.join(", ")}`);
        console.log(`Balance: $${this.balance}`);
    }
}
// Array to store students
const students = [];
const mainMenu = async () => {
    const { action } = await inquirer.prompt({
        name: "action",
        type: "list",
        message: "Choose an action:",
        choices: [
            "Add New Student",
            "Enroll in Course",
            "View Balance",
            "Pay Tuition",
            "Show Status",
            "Exit",
        ],
    });
    switch (action) {
        case "Add New Student":
            await addNewStudent();
            break;
        case "Enroll in Course":
            await enrollInCourse();
            break;
        case "View Balance":
            await viewBalance();
            break;
        case "Pay Tuition":
            await payTuition();
            break;
        case "Show Status":
            await showStatus();
            break;
        case "Exit":
            console.log("Goodbye!");
            return;
    }
    mainMenu(); // Show the menu again after an action
};
const addNewStudent = async () => {
    const { name } = await inquirer.prompt({
        name: "name",
        type: "input",
        message: "Enter student name:",
    });
    const student = new Student(name);
    students.push(student);
    console.log(`Student ${name} added with ID ${student.id}.`);
};
const findStudentById = async () => {
    const { id } = await inquirer.prompt({
        name: "id",
        type: "number",
        message: "Enter student ID:",
    });
    const student = students.find((s) => s.id === id);
    if (!student) {
        console.log("Student not found.");
        return null;
    }
    return student;
};
const enrollInCourse = async () => {
    const student = await findStudentById();
    if (!student)
        return;
    const { course } = await inquirer.prompt({
        name: "course",
        type: "input",
        message: "Enter course name:",
    });
    student.enroll(course);
};
const viewBalance = async () => {
    const student = await findStudentById();
    if (!student)
        return;
    student.viewBalance();
};
const payTuition = async () => {
    const student = await findStudentById();
    if (!student)
        return;
    const { amount } = await inquirer.prompt({
        name: "amount",
        type: "number",
        message: "Enter payment amount:",
    });
    student.payTuition(amount);
};
const showStatus = async () => {
    const student = await findStudentById();
    if (!student)
        return;
    student.showStatus();
};
// Run the application
mainMenu();
