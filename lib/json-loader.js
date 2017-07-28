'use babel';

var fs = require('fs');

function JsonLoader() {

  var self = this;

  self.load = function() {

    var json = fs.readFileSync(__dirname + '/../data.json', 'utf8');
    // var json = fs.readFileSync((path.join(__dirname, '/../data.json')), 'utf8');
    var obj = JSON.parse(json);
    console.log(obj);
  };

}

module.exports = JsonLoader;
