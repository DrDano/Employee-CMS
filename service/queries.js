const fs = require('fs');
const db = require('../db');

class Queries {
    constructor () {
        this.schema = fs.readFileSync('./db/schema.sql').toString();
        this.seeds = fs.readFileSync('./db/seeds.sql').toString();
    }

    disconnect() {
        db.end();
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
        GROUP BY employee.last_name ORDER BY employee.last_name;`

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
        GROUP BY dep_id ORDER BY dep_id DESC;`

        db.promise().query(sql)
            .then(([rows, fields]) => {
                cb(rows);
            })
            .catch(console.log)
    }

    addDepartment(dept) {
        const sql = `INSERT INTO department (name) VALUES (?);`

        db.query(sql, dept, (err, rows) => {
            if (err) {
                console.log(err.message);
                return;
            }
            
        });
    }

}

module.exports = Queries;