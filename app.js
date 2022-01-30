const Presenter = require('./presenters/presenter');
const present = new Presenter;
const Prompt = require('./controllers/prompts/prompts');
const Query = require('./service/queries');
const query = new Query;
const prompt = new Prompt;

present.setDataModel();

function app() {
    prompt.mainMenu()
    .then((result) => {
        if (result.menu.split(' ')[0] === 'query') {
            present.display(result.menu)
            return;
        } else present.execute(result.menu)
    })
    .then(() => {
        query.disconnect()
        return app();
    })
}

app();