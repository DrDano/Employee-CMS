const Presenter = require('./presenters/presenter');
const present = new Presenter;

present.setDataModel();
present.append('addRole', 'Bartender, 10000, 1')
present.display('queryAllRoles');