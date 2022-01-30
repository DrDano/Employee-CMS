# Employee-CMS
A content management system that runs entirely in your terminal.

  ![](https://img.shields.io/badge/javascript-100-yellow?logo=javascript)
  ![](https://img.shields.io/badge/mysql2-dep-blue?logo=npm)
  ![](https://img.shields.io/badge/inquirer-dep-blue?logo=npm)
  ![](https://img.shields.io/badge/console.table-dep-blue?logo=npm)

  ## Description

  This application is not deployed so please clone the repo to somewhere on your system.

  The app allows the user to see tables containing members of their organization (employees, managers) as well as their roles and departments.

  The app runs entirely in the terminal and utilizes mysql for data storage locally on your system. Once you clone the repo and start the application, you should never have to access the mysql CLI tool to see any data. The app is designed to be customizable, and including new queries is fairly straightforward. To include a new query, just make sure it is a new method in ```service > queries.js``` and a new prompt within ```controllers > prompts > prompts.js```.

  Each time you run the app it will run the schema but keep your database and tables. There is an option within the inquirer menu that allows you to drop your database if you want to start over, but you can also delete any item you've created individually.

  ## Deployment Link
  [Link to deployed app](https://notserverdh.herokuapp.com/)

  ## Walk Through Video
  [Link to Walk Through]()

  ## Table of contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Maintainers](#maintainers)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Credits](#credits)
  * [License](#license)

  ## Installation
  If you are going to be running the app from your IDE, this step is necessary, otherwise you can use through Heroku without utilizing any CLI commands.

  Make sure you have the latest stable version of node installed: ```node --version```

  Fork the project and clone the repository. Then in your CLI enter ```node install``` which will install express.js, as it is the only dependency.

  ## Usage
  Once the repo is cloned: ```npm start``` is the only command you need to enter into the terminal.

  You will see a main menu.

  It is important to note that each manager and employee that you create must be attached to a pre-existing department and role. If you attempt to create a manager or employee without at least 1 department and 1 role created, you will see an error and be taken back to the main menu.

  ## Maintainer
  [@Daniel Harned](https://github.com/DrDano)

  Email: [danielharned@gmail.com](mailto:danielharned@gmail.com)

  ## Contributing
  Forking is encouraged if you would like to contribute!

  ## Credits
  
  * [express.js](https://expressjs.com/)

  ## License
  Licensed under [MIT](https://choosealicense.com/licenses/mit) 2022 
  
  ![](https://img.shields.io/badge/license-MIT-blue)