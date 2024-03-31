#! /usr/bin/env node

import inquirer from  'inquirer';
console.log("Welcome to Number Guessing Game!");

const realNumber=Math.floor(Math.random()*10+1);
const answer=await  inquirer.prompt([{
    type: "number", 
    message: "Please guess a number between 1-10.",
    name: "userGuessedNumber",
}]);

if (answer.userGuessedNumber===realNumber) {
    console.log("Congratulations! You Guess right number!");
} else{
    console.log("You guessed wrong number. The correct one is "+realNumber);
}
