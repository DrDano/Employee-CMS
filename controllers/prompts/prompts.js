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
                choices: ['query All Employees', 'query All Departments', 'query All Roles', 'query All Managers', new inquirer.Separator(), 'add Department', 'add Role', 'add Manager', 'add Employee', new inquirer.Separator(), 'update Employee Role', 'update Employee Manager', new inquirer.Separator(), 'delete Department', 'delete Role', 'delete Employee', 'delete Manager', new inquirer.Separator(), 'disconnect',new inquirer.Separator(), 'run Seeds', new inquirer.Separator(), 'drop Database', new inquirer.Separator()]
            },
            {
                type: 'input',
                name: 'addDep',
                message: 'Please provide a department name.',
                when: (answers) => answers.menu === 'add Department',
                validate: (answers) => {
                    if (answers) {
                        return true;
                    }
                    return false;
                }
            },
            {
                type: 'input',
                name: 'addRole',
                message: 'Please provide a role title',
                when: (answers) => answers.menu === 'add Role',
                validate: (answers) => {
                    if (answers) {
                        return true;
                    }
                    return false;
                }
            },
            {
                type: 'input',
                name: 'addRoleSalary',
                message: 'Please provide a role salary',
                when: (answers) => {
                    if (answers.addRole) {
                        return true;
                    }
                },
                validate: (answers) => {
                    if (answers) {
                        return true;
                    }
                    return false;
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
                },
                validate: (answers) => {
                    if (answers) {
                        return true;
                    }
                    return false;
                }
            },
            {
                type: 'input',
                name: 'addManF',
                message: 'Please provide the manager\'s first name',
                when: (answers) => answers.menu === 'add Manager',
                validate: (answers) => {
                    if (answers) {
                        return true;
                    }
                    return false;
                }
            },
            {   
                type: 'input',
                name: 'addManL',
                message: 'Please provide the manager\'s last name',
                when: (answers) => {
                    if (answers.addManF) {
                        return true;
                    }
                },
                validate: (answers) => {
                    if (answers) {
                        return true;
                    }
                    return false;
                }
            },
            {
                type: 'input',
                name: 'addManRoleId',
                message: 'Please provide a role id for the manager',
                when: (answers) => {
                    if (answers.addManL) {
                        return true;
                    }
                },
                validate: (answers) => {
                    if (answers) {
                        return true;
                    }
                    return false;
                }
            },
            {
                type: 'input',
                name: 'addEmployeeF',
                message: 'Please provide the employee\'s first name',
                when: (answers) => answers.menu === 'add Employee',
                validate: (answers) => {
                    if (answers) {
                        return true;
                    }
                    return false;
                }
            },
            {   
                type: 'input',
                name: 'addEmployeeL',
                message: 'Please provide the employee\'s last name',
                when: (answers) => {
                    if (answers.addEmployeeF) {
                        return true;
                    }
                },
                validate: (answers) => {
                    if (answers) {
                        return true;
                    }
                    return false;
                }
            },
            {
                type: 'input',
                name: 'addERoleId',
                message: 'Please provide a role id for the employee',
                when: (answers) => {
                    if (answers.addEmployeeL) {
                        return true;
                    }
                },
                validate: (answers) => {
                    if (answers) {
                        return true;
                    }
                    return false;
                }
            },
            {
                type: 'input',
                name: 'addEManId',
                message: 'Please provide the manager id of the employee\'s manager',
                when: (answers) => {
                    if (answers.addERoleId) {
                        return true;
                    }
                },
                validate: (answers) => {
                    if (answers) {
                        return true;
                    }
                    return false;
                }
            },
            {
                type: 'input',
                name: 'updateERole',
                message: 'What will the employee\'s new role id be?',
                when: (answers) => answers.menu === 'update Employee Role',
                validate: (answers) => {
                    if (answers) {
                        return true;
                    }
                    return false;
                }
            },
            {   
                type: 'input',
                name: 'updateERoleId',
                message: 'Please provide the employee\'s id',
                when: (answers) => {
                    if (answers.updateERole) {
                        return true;
                    }
                },
                validate: (answers) => {
                    if (answers) {
                        return true;
                    }
                    return false;
                }
            },
            {
                type: 'input',
                name: 'updateEMan',
                message: 'What will the employee\'s new manager id be?',
                when: (answers) => answers.menu === 'update Employee Manager',
                validate: (answers) => {
                    if (answers) {
                        return true;
                    }
                    return false;
                }
            },
            {   
                type: 'input',
                name: 'updateEManId',
                message: 'Please provide the employee\'s id',
                when: (answers) => {
                    if (answers.updateEMan) {
                        return true;
                    }
                },
                validate: (answers) => {
                    if (answers) {
                        return true;
                    }
                    return false;
                }
            },
            {
                type: 'input',
                name: 'deleteDep',
                message: 'What is the id of the department you want to delete?',
                when: (answers) => answers.menu === 'delete Department',
                validate: (answers) => {
                    if (answers) {
                        return true;
                    }
                    return false;
                }
            },
            {
                type: 'input',
                name: 'deleteRole',
                message: 'What is the id of the role you want to delete?',
                when: (answers) => answers.menu === 'delete Role',
                validate: (answers) => {
                    if (answers) {
                        return true;
                    }
                    return false;
                }
            },
            {
                type: 'input',
                name: 'deleteEmp',
                message: 'What is the id of the employee you want to delete?',
                when: (answers) => answers.menu === 'delete Employee',
                validate: (answers) => {
                    if (answers) {
                        return true;
                    }
                    return false;
                }
            },
            {
                type: 'input',
                name: 'deleteMan',
                message: 'What is the id of the manager you want to delete',
                when: (answers) => answers.menu === 'delete Manager',
                validate: (answers) => {
                    if (answers) {
                        return true;
                    }
                    return false;
                }
            }
        ])
    }
}

module.exports = Prompt;