#! /usr/bin/env node
import inquirer from "inquirer";
const randomNum = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please Guess a Number Between 1 to 10",
    }
]);
if (answers.UserGuessedNumber === randomNum) {
    console.log("Congratulation You Guessed Right Number");
}
else {
    console.log("You Guessed Wrong number");
}
