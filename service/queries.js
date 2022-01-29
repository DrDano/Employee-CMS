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
            db.promise().query(element)
            .then((result) => {
                // console.log(result);
            })
            .catch(console.log);
        });
    };

    runSeeds() {
        const sql = this.seeds.split(';');

        sql.forEach(element => {
            db.promise().query(element)
            .then((result) => {
                // console.log(result);
            })
            .catch(console.log);
        });
    };

    queryAllEmployees() {
        const sql = `SELECT * FROM employee;`

        db.promise().query(sql)
            .then(([rows, fields]) => {
                return rows;
            })
            .catch(console.log);
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