const Presenter = require('./presenters/presenter');
const present = new Presenter;
const Prompt = require('./controllers/prompts/prompts');
const prompt = new Prompt;

present.setDataModel();

prompt.mainMenu()
.then((result) => {
    if (result.menu.split(' ')[0] === 'query') {
        present.display(result.menu)
        return;
    }
    present.execute(result.menu)
})
.then(() => prompt.mainMenu())