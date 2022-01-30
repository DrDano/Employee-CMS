const Query = require("../service/queries");
const getQuery = new Query();

class Presenter {
  constructor() {}

  setDataModel() {
    getQuery.runSchema();
    getQuery.runSeeds();
  }

  display(action, content = "") {
    let a = action.split(" ").join("");
    let c = content.split(",");
    getQuery[a]((rows) => {
      console.log("\n");
      console.table(rows), c;
    });
  }

  execute(action, content = "") {
    let a = action.split(" ").join("");
    let c = content.split(",");
    getQuery[a](c);
  }
}

module.exports = Presenter;
