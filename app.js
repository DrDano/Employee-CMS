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
        } else {
            modResult = Object.values(result).slice(1).toString()
            console.log(result.menu)
            console.log(modResult)
            present.execute(result.menu, modResult)
        }
    })
    .then(() => {
        app();
    })
    .catch((error) => console.log(error))
}

app();