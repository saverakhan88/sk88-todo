#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
console.log(chalk.magenta.italic("\n\t Welcome to Savera's TODO LIST APPLICATION\n"));
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.green("Enter your New Task:")
        },
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo List successfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addMore",
            type: "confirm",
            message: chalk.grey("Do you want to add more Task?"),
            default: "false"
        },
    ]);
    condition = addMoreTask.addMore;
}
console.log("Your updated TODO LIST:", todoList);
