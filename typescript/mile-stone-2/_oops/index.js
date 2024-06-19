#!/usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Person {
    students = [];
    addStudent(student) {
        this.students.push(student);
    }
}
const persons = new Person();
const programStart = async (person) => {
    do {
        console.log("WELCOME TO MY SITE");
        const answer = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: "Whom would you like to interact with?",
                choices: ["staff", "student", "exit"],
            },
        ]);
        if (answer.select === "staff") {
            console.log("You approach the staff room. Please feel free to ask any questions.");
        }
        else if (answer.select === "student") {
            const studentAnswer = await inquirer.prompt([
                {
                    name: "name",
                    type: "input",
                    message: "What is your name? Who would you like to engage with?",
                },
            ]);
            const existingStudent = person.students.find((student) => student.name === studentAnswer.name);
            if (!existingStudent) {
                const newStudent = new Student(studentAnswer.name);
                person.addStudent(newStudent);
                console.log(`Hello, I am ${newStudent.name}. Nice to meet you!`);
                console.log("New student added successfully.");
                console.log("Current student list:");
                console.log(person.students.map((student) => student.name));
            }
            else {
                console.log(`Hello, I am ${existingStudent.name}. Nice to meet you!`);
                console.log("Existing student list:");
                console.log(person.students.map((student) => student.name));
            }
        }
        else if (answer.select === "exit") {
            console.log("Exiting the program.");
            process.exit();
        }
    } while (true);
};
programStart(persons);
