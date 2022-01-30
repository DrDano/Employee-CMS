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
                choices: ['query All Employees', 'query All Departments', 'query All Roles', new inquirer.Separator(), 'add Department', 'add Role', 'add Manager', 'add Employee', new inquirer.Separator(), 'update Employee Role', 'update Employee Manager', new inquirer.Separator(), 'delete Department', 'delete Role', 'delete Employee', 'delete Manager', new inquirer.Separator(), 'disconnect',new inquirer.Separator()]
            },
            {
                type: 'input',
                name: 'addDep',
                message: 'Please provide a department name.',
                when: (answers) => answers.menu === 'add Department'
            },
            {
                type: 'input',
                name: 'addRole',
                message: 'Please provide a role title',
                when: (answers) => answers.menu === 'add Role'
            },
            {
                type: 'input',
                name: 'addRoleSalary',
                message: 'Please provide a role salary',
                when: (answers) => {
                    if (answers.addRole) {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'addRoleDep',
                message: 'Please provide a role department number',
                when: (answers) => {
                    if (answers.addRoleSalary) {
                        return true;
                    }
                }
            }
        ])
    }
}

module.exports = Prompt;