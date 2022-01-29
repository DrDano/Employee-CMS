const Query = require('../service/queries');
const cTable = require('console.table');
const getQuery = new Query;

const getEmployees = new Promise((resolve, reject) => {
    resolve(getQuery.queryAllEmployees());
    reject(new Error("error displaying employees"))
});

getQuery.runSchema();
getQuery.runSeeds();

// getEmployees.then((employees) => {console.table(employees)})
// const presenter = new Presenter();
// presenter.displayEmployees().then(res => console.table(res));

// Will use console.table to present results of queries to the user