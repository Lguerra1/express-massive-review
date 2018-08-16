// .env setup
require('dotenv').config();
// import node modules
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

// import controller
const ctrl = require('./controller');

// destructure environmental variables
const {
  SERVER_PORT,
  CONNECTION_STRING,
} = process.env;

// create express server and assign it as 'app'
const app = express();

// top level middleware
app.use(bodyParser.json());

// create a connection with our database 
// IMPORTANT: sql query files must be in a folder called db on the root level
massive(CONNECTION_STRING).then(db => {
  app.set('db', db); // 'set' our database connection object (db) on app

  // uncomment the line below to rebuild your database, however it will delete all current data.
  // app.get('db').db_setup()
});

// endpoints
// read
app.get('/api/something', /* request level middleware would go here, if any */ ctrl.getSomething);
// create
app.post('/api/something', /* request level middleware would go here, if any */ ctrl.createSomething);
// update
app.put('/api/something/:id', /* request level middleware would go here, if any */
ctrl.updateSomething);

// run our express server on a specific port
app.listen(SERVER_PORT, () => console.log(`What a feeling on port ${SERVER_PORT}...ling`));