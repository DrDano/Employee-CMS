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
                    console.log(err.message);
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
                    console.log(err.message);
                    return;
                }
                return;
            });
        });
    };

    queryAllEmployees() {
        const sql = `SELECT * FROM employee;`

        db.query(sql, (err, result) => {
            if (err) {
                console.log(err.message);
                return;
            }
            return result;
        });
    }

    queryAllDepartments() {
        const sql = `SELECT * FROM department;`

        db.promise().query(sql)
            .then(([rows, fields]) => {
                return rows;
            })
            .catch(console.log);
    }

    queryAllRoles() {
        const sql = `SELECT * FROM role;`

        db.promise().query(sql)
            .then(([rows, fields]) => {
                return rows;
            })
            .catch(console.log);
    }

}

module.exports = Queries;