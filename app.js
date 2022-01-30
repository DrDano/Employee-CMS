const Presenter = require('./presenters/presenter');
const present = new Presenter;
const Prompt = require('./controllers/prompts/prompts');
const Query = require('./service/queries');
const query = new Query;
const prompt = new Prompt;

query.runSchema();

function app() {
    prompt.mainMenu()
    .then((result) => {
        if (result.menu.split(' ')[0] === 'query') {
           return present.display(result.menu)
        } else {
            modResult = Object.values(result).slice(1).toString()
           return present.execute(result.menu, modResult)
        }
    })
    .then(() => {
        console.clear();
        return app();
    })
    .catch((error) => console.log(error))
}

app();