#!/usr/bin/env node
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 25;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 25;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
const playerResponse = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter your name",
    },
]);
const opponentResponse = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select your opponent",
        choices: ["zombie", "skeleton", "alien"],
    },
]);
let player = new Player(playerResponse.name);
let opponent = new Opponent(opponentResponse.select);
async function gameLoop() {
    while (true) {
        let actionResponse = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What do you want to do?",
                choices: ["attack", "run for your life..", "drink potion"],
            },
        ]);
        if (actionResponse.opt === "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player.fuelDecrease();
                console.log(`${player.name}'s fuel is ${player.fuel}`);
                console.log(`${opponent.name}'s fuel is ${opponent.fuel}`);
                if (player.fuel <= 0) {
                    console.log("You lose, better luck next time.");
                    process.exit();
                }
            }
            else {
                opponent.fuelDecrease();
                console.log(`${opponent.name}'s fuel is ${opponent.fuel}`);
                console.log(`${player.name}'s fuel is ${player.fuel}`);
                if (opponent.fuel <= 0) {
                    console.log("You win!");
                    process.exit();
                }
            }
        }
        if (actionResponse.opt === "drink potion") {
            player.fuelIncrease();
            console.log(`You drank a health potion. Your fuel is ${player.fuel}`);
        }
        if (actionResponse.opt === "run for your life..") {
            console.log(`You lose, better luck next time. ${player.fuel}`);
            process.exit();
        }
    }
}
gameLoop();
