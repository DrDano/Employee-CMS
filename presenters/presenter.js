const Query = require('../service/queries');
const cTable = require('console.table');
const getQuery = new Query;

runSchema = new Promise((resolve, reject) => {
    resolve(getQuery.runSchema())
    .catch((err) => reject(err))
})

runSeeds = new Promise((resolve, reject) => {
    resolve(getQuery.runSeeds())
    .catch((err) => reject(err))
})

getEmployees = new Promise((resolve, reject) => {
    resolve(getQuery.queryAllEmployees())
    .catch((err) => reject(err))
})

runSchema.then(() => {runSeeds}).then(() => getEmployees).then((data) => {console.log(data)})