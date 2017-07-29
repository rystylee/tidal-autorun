'use babel';

var fs = require('fs');

function JsonLoader() {

  var self = this;
  var txt;

  self.load = function() {

    var obj = JSON.parse(fs.readFileSync(`${atom.config.get('tidal-autorun.FilePath-JSON')}`, 'utf8'));

    txt = 'd1 $ \nsound "';
    for(var i=0; i<obj.samples.length; i++) {
      txt += obj.samples[i] + ' ';
    }
    txt += '" \n';
  };

  self.getText = function() {
    return txt;
  };

}

module.exports = JsonLoader;
