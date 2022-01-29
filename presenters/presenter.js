const Query = require('../service/queries');
const getQuery = new Query;

class Presenter {
    constructor() {

    }

    setDataModel() {
        getQuery.runSchema();
        getQuery.runSeeds();
    }

    display(action) {
        action = action.split(' ').join('');
        getQuery[action](rows => console.table(rows));
    }
}

module.exports = Presenter;