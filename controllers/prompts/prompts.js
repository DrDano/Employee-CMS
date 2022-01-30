const inquirer = require('inquirer');
const Presenter = require('../../presenters/presenter');
const present = new Presenter;

class Prompt {
    constructor() {

    }

    mainMenu() {
        return inquirer
        .prompt([
            {
                type: 'list',
                name: 'menu',
                message: 'What would you like to do?',
                choices: ['query All Employees', 'query All Departments', 'query All Roles', new inquirer.Separator(), 'add Department', 'add Role', 'add Manager', 'add Employee', new inquirer.Separator(), 'update Employee Role', 'update Employee Manager', new inquirer.Separator(), 'delete Department', 'delete Role', 'delete Employee', 'delete Manager', new inquirer.Separator()]
            }
        ])
    }
}

module.exports = Prompt;