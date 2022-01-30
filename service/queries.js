const fs = require('fs');
const { exit } = require('process');
const db = require('../db');

class Queries {
    constructor () {
        this.schema = fs.readFileSync('./db/schema.sql').toString();
        this.seeds = fs.readFileSync('./db/seeds.sql').toString();
    }

    dropDatabase() {
        const sql = `DROP DATABASE IF EXISTS corporate;`
        const modSql = this.schema.split(';');

        db.query(sql, (err, result) => {
            if (err) {
                return;
            }
        })

        modSql.forEach(element => {
            db.query(element, (err, result) => {
                if (err) {
                    return;
                }
            });
        });
    }

    disconnect(data = "") {
        db.end();
        const displayInfo = () => {
            console.log('Exiting Menu')
        }

        process.on('SIGHUP', displayInfo);

        process.kill(process.pid, 'SIGHUP')
    }

    runSchema() {
        const sql = this.schema.split(';');

        sql.forEach(element => {
            db.query(element, (err, result) => {
                if (err) {
                    return;
                }
            });
        });
    };

    runSeeds() {
        const sql = this.seeds.split(';');

        sql.forEach(element => {
            db.query(element, (err, result) => {
                if (err) {
                    return;
                }
            });
        });
    };
 
    queryAllEmployees(cb) {
        const sql = `SELECT employee.id, CONCAT(employee.first_name, ' ', employee.last_name) AS name, roles.title, department.name AS department, roles.salary, CONCAT(managers.first_name, ' ', managers.last_name) AS manager
        FROM employee
        LEFT JOIN roles ON employee.roles_id = roles.id
        LEFT JOIN department ON roles.dep_id = department.id
        LEFT JOIN managers ON employee.manager_id = managers.id
        ORDER BY employee.last_name;`

        db.query(sql, (err, rows) => {
            if (err) {
                console.log(err.message.sqlMessage);
                return;
            }
            cb(rows);
        });
    };

    queryAllManagers(cb) {
        const sql = `SELECT managers.id, CONCAT(managers.first_name, ' ', managers.last_name) AS name, roles.title, roles.salary, department.name AS department
        FROM managers
        LEFT JOIN roles ON managers.roles_id = roles.id
        LEFT JOIN department ON roles.dep_id = department.id
        ORDER BY managers.last_name;`

        db.query(sql, (err, rows) => {
            if (err) {
                console.log(err.message.sqlMessage);
                return;
            }
            cb(rows);
        });
    };

    queryAllDepartments(cb) {
        const sql = 
        `SELECT department.id AS ID, department.name AS Department_Name FROM department;`

        db.promise().query(sql)
            .then(([rows, fields]) => {
                cb(rows);
            })
            .catch((err) => console.log(`\n Error: ${err.sqlMessage}`))
    }

    queryAllRoles(cb) {
        const sql = 
        `SELECT roles.id, roles.title, roles.salary, department.name AS department
        FROM roles
        LEFT JOIN department ON roles.dep_id = department.id
        ORDER BY dep_id DESC;`

        db.promise().query(sql)
            .then(([rows, fields]) => {
                cb(rows);
            })
            .catch((err) => console.log(`\n Error: ${err.sqlMessage}`))
    }

    // queryTotalDepartmentBudget(cb, dept) {
    //     const sql = 
    //     `SELECT department.name AS Department, roles.salary * SELECT COUNT(employee.id) WHERE employee.roles_id = ?
    //     FROM roles 
    //     LEFT JOIN department ON roles.dep_id = department.id WHERE department.id = ?;`

    //     db.promise().query(sql, dept)
    //         .then(([rows, fields]) => {
    //             cb(rows);
    //         })
    //         .catch(console.log)
    // }

    addDepartment(dept) {
        const sql = `INSERT INTO department (name) VALUES (?);`

        db.promise().query(sql, dept)
        .catch((err) => console.log(`\n Error: ${err.sqlMessage}`))
    }

    addRole(role) {
        const sql = `INSERT INTO roles (title, salary, dep_id) VALUES (?,?,?);`

        db.promise().query(sql, role)
        .catch((err) => console.log(`\n Error: ${err.sqlMessage}`))
    }

    addManager(man) {
        const sql = `INSERT INTO managers (first_name, last_name, roles_id) VALUES (?,?,?);`

        db.promise().query(sql, man)
        .catch((err) => console.log(`\n Error: ${err.sqlMessage}`))
    }

    addEmployee(emp) {
        const sql = `INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES (?,?,?,?);`

        db.promise().query(sql, emp)
        .catch((err) => console.log(`\n Error: ${err.sqlMessage}`))
    }

    updateEmployeeRole(emp) {
        const sql = `UPDATE employee SET roles_id = ? WHERE id = ?;`

        db.promise().query(sql, emp)
        .catch((err) => console.log(`\n Error: ${err.sqlMessage}`))
    }

    updateEmployeeManager(emp) {
        const sql = `UPDATE employee SET manager_id = ? WHERE id = ?;`

        db.promise().query(sql, emp)
        .catch((err) => console.log(`\n Error: ${err.sqlMessage}`))
    }

    deleteDepartment(dep) {
        const sql = `DELETE FROM department WHERE department.id = ?;`

        db.promise().query(sql, dep)
        .catch((err) => console.log(`\n Error: ${err.sqlMessage}`))
    }

    deleteRole(role) {
        const sql = `DELETE FROM roles WHERE roles.id = ?;`

        db.promise().query(sql, role)
        .catch((err) => console.log(`\n Error: ${err.sqlMessage}`))
    }

    deleteEmployee(emp) {
        const sql = `DELETE FROM employee WHERE employee.id = ?;`

        db.promise().query(sql, emp)
        .catch((err) => console.log(`\n Error: ${err.sqlMessage}`))
    }

    deleteManager(man) {
        const sql = `DELETE FROM managers WHERE managers.id = ?;`

        db.promise().query(sql, man)
        .catch((err) => console.log(`\n Error: ${err.sqlMessage}`))
    }

}

module.exports = Queries;