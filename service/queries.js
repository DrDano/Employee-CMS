const fs = require('fs');
const db = require('../db');

class Queries {
    constructor () {
        this.schema = fs.readFileSync('./db/schema.sql').toString();
        this.seeds = fs.readFileSync('./db/seeds.sql').toString();
    }

    runSchema() {
        const sql = this.schema.split(';');

        sql.forEach(element => {
            db.query(element, (err, result) => {
                if (err) {
                    return;
                }
                return;
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
        const sql = `SELECT * FROM employee;`

        db.query(sql, (err, rows) => {
            if (err) {
                console.log(err.message);
                return;
            }
            cb(rows);
        });

        db.end();
    };

    queryAllDepartments(cb) {
        const sql = 
        `SELECT department.id AS ID, department.name AS Department_Name FROM department;`

        db.promise().query(sql)
            .then(([rows, fields]) => {
                cb(rows);
            })
            .catch(console.log)
            .then( () => db.end());
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
            .then( () => db.end());
    }

}

module.exports = Queries;