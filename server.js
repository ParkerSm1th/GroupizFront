require('dotenv').config()
const express = require('express')
var bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const logger = require('./utils/loggerUtil');
const routes = require('./routes');
const path = require('path');

/*
  App init
*/
var cors = require("cors");
const app = express();
app.use(cors());

app.use(bodyParser.json({
  limit: "50mb"
}));
app.use(bodyParser.urlencoded({
  limit: "50mb",
  extended: true,
  parameterLimit: 50000
}));
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

// Set the folder for css & java scripts
app.use(express.static(path.join(__dirname,'css')));
app.use(express.static(path.join(__dirname, 'node_modules')));

// Set the view engine to ejs
app.set('view engine', 'ejs');

app.use('/', routes);

app.listen(port, host, () => {
  logger.info(`Server starting up - Running on ${host}:${port}`);
})

