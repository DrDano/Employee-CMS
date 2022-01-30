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
                console.log(err.message);
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
            .catch(console.log)
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
            .catch(console.log)
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
        .catch(console.log)
    }

    addRole(role) {
        const sql = `INSERT INTO roles (title, salary, dep_id) VALUES (?,?,?);`

        db.promise().query(sql, role)
        .catch(console.log)
    }

    addManager(man) {
        const sql = `INSERT INTO managers (first_name, last_name, roles_id) VALUES (?,?,?);`

        db.promise().query(sql, man)
        .catch(console.log)
    }

    addEmployee(emp) {
        const sql = `INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES (?,?,?,?);`

        db.promise().query(sql, emp)
        .catch(console.log)
    }

    updateEmployeeRole(emp) {
        const sql = `UPDATE employee SET roles_id = ? WHERE id = ?;`

        db.promise().query(sql, emp)
        .catch(console.log)
    }

    updateEmployeeManager(emp) {
        const sql = `UPDATE employee SET manager_id = ? WHERE id = ?;`

        db.promise().query(sql, emp)
        .catch(console.log)
    }

    deleteDepartment(dep) {
        const sql = `DELETE FROM department WHERE department.id = ?;`

        db.promise().query(sql, dep)
        .catch(console.log)
    }

    deleteRole(role) {
        const sql = `DELETE FROM roles WHERE roles.id = ?;`

        db.promise().query(sql, role)
        .catch(console.log)
    }

    deleteEmployee(emp) {
        const sql = `DELETE FROM employee WHERE employee.id = ?;`

        db.promise().query(sql, emp)
        .catch(console.log)
    }

    deleteManager(man) {
        const sql = `DELETE FROM managers WHERE managers.id = ?;`

        db.promise().query(sql, man)
        .catch(console.log)
    }

}

module.exports = Queries;