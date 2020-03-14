This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Budget Planner deployment explanation on github Pages

After git clone the master branch to your local, in the project directory, you can run:

### `npm start`

#### `Auth0 configuration`

I used Auth0 for authentication, in order to run the code in your local environment, you need to register Auth0 [Auth0](https://auth0.com/signup?&signUpData=%7B%22category%22%3A%22button%22%7D) and create Application with setting following params: <br />
REACT_APP_AUTH0_CALLBACK_URL=http://localhost:3000 <br /> REACT_APP_AUTH0_RETURNTO_URL=REACT_APP_AUTH0_CALLBACK_URL=http://localhost:3000 <br />

For details, please reference this tutorial: [https://auth0.com/docs/quickstart/spa/react](https://auth0.com/docs/quickstart/spa/react)<br />

Once Auth0 is done, you can copy the domain and client id into the .env file and then you can run <bold>npm start</bold> to run the project locally.

### `npm run deploy`

This will deploy the project into github page in your repository.
open [http://gitUserName.github.io/yourrepository] to view it in the browser.

Notice: since github page doesn't run project under root, you need to change the following environment variable in the .env before deployment:

REACT_APP_AUTH0_CALLBACK_URL: [http://gitUserName.github.io/yourrepository] <br />
REACT_APP_AUTH0_RETURNTO_URL: [http://gitUserName.github.io/yourrepository] <br />
REACT_APP_REPOSITORY: yourrepository <br />

You also need to change the homepage in package.json:

"homepage": [http://gitUserName.github.io/yourrepository]

You can reference this tutorial for more details for github page deployment:
[https://create-react-app.dev/docs/deployment/](https://create-react-app.dev/docs/deployment/)

I deployed this project to this github page for your reference: [http://juan3juan.github.io/budgetPlanner](http://juan3juan.github.io/budgetPlanner)

### `npm run dev`

For local test, please use npm run dev

As this app

## Deploy to Heroku

You can also deploy this project to Heroku using Heroku Dashboard or Heroku CLI
Please reference this tutorial for Heroku deployment: [https://blog.heroku.com/deploying-react-with-zero-configuration](https://blog.heroku.com/deploying-react-with-zero-configuration)

Notice, you can delete the REACT_APP_REPOSITORY in the .env file and the homepage in package.json since Heroku can run under root. .env file can also be deleted since you can add env variables through Heroku Dashboard or CLI

I also deployed this project to heroku for your reference: [https://budger-planner-heroku.herokuapp.com/](https://budger-planner-heroku.herokuapp.com/)
