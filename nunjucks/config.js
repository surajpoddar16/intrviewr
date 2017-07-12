var nunjucks = require('nunjucks');
var config = require('config');
var env = new nunjucks.Environment();

env.addFilter('urlSafe', function (str) {
  return str.toLowerCase().replace(' ', '-');
});

env.addGlobal('publicFolder', config.get('app.public_url'));
