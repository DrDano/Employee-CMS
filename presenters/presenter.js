const Query = require('../service/queries');
const getQuery = new Query;

class Presenter {
    constructor() {
        this.runSchema = new Promise((resolve, reject) => {
            resolve(getQuery.runSchema())
            .catch((err) => reject(err))
        })
        
        this.runSeeds = new Promise((resolve, reject) => {
            resolve(getQuery.runSeeds())
            .catch((err) => reject(err))
        })
    }

    setDataModel() {
        this.runSchema.then(() => {this.runSeeds})
    }

    displayEmployees() {
        getQuery.queryAllEmployees(rows => console.table(rows));
    }

    displayDepartments() {
        getQuery.queryAllDepartments(rows => console.table(rows));
    }

    displayRoles() {
        getQuery.queryAllRoles(rows => console.table(rows));
    }
}

module.exports = Presenter;