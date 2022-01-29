const Query = require('../service/queries');
const getQuery = new Query;

class Presenter {
    constructor() {

    }

    setDataModel() {
        getQuery.runSchema();
        getQuery.runSeeds();
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