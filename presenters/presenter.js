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
        let a = action.split(' ').join('');
        getQuery[a](rows => console.table(rows));
    }

    append(action, content) {
        let a = action.split(' ').join('');
        let c = content.split(',')
        getQuery[a](c)
    }
}

module.exports = Presenter;