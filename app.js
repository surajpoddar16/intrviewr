// Environment Setup

// Used by config module to fetch configuration options for different node environments
process.env.NODE_CONFIG_DIR = __dirname + '/config';

var applicableEnvs = [
    'production'
    ,'development'
    ,'test'
];

if (applicableEnvs.indexOf(process.env.NODE_ENV) === -1) {
    console.log('Please select a valid environment');
    applicableEnvs.forEach(function(env) {
        console.log('-- ' + env);
    });
    return;
}

// Load Dependencies
var express = require('express');
var app = express();
var http = require('http');
var config = require('config');
var morgan = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routerIndex = require('./routes/index');
var nunjucks = require('nunjucks');
var nunConfig = require('./nunjucks/config');
var redisDb = require('./main-modules/db-redis');
var models = require('./models');

// View engine setup
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
nunjucks.configure(app.get('views'), {
  autoescape: true,
  express: app,
  watch: true
});

app.use(cookieParser());

// Using body parser to parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Using morgan to log requests
app.use(morgan('combined'));

// Route Handler
app.use('/', routerIndex);

// Serve static files from public folder
app.use('/public', express.static('public'));

// Set port to listen to
app.set('port', config.get('app.port'));

server = app.listen(app.get('port'), function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("SERVER LISTINING ON " + server.address().address + ":" + server.address().port);
});

// Connect to db servers
redisDb.connect(function (resp) {
  models.sequelize.sync().then(function () {});
});

exports.app = app;
exports.server = server;
