'use babel';

var fs = require('fs');

function JsonLoader() {

  var self = this;
  var txt;

  self.load = function() {
    var obj = JSON.parse(fs.readFileSync(`${atom.config.get('tidal-autorun.FilePath-JSON')}`, 'utf8'));
    // debug
    // var obj = JSON.parse(fs.readFileSync(__dirname + '/../data.json', 'utf8'));

    txt = 'do\n'

    // --------- d1
    // sound
    txt += '  d1 $ \n    sound "';
    for(var i=0; i<obj.d1.samples.length; i++) {
      txt += obj.d1.samples[i] + ' ';
    }
    txt += '" \n';

    // --------- d2
    // sound
    txt += '  d2 $ \n    sound "';
    for(var i=0; i<obj.d2.samples.length; i++) {
      txt += obj.d2.samples[i] + ' ';
    }
    txt += '" \n';

    // --------- d3
    // sound
    txt += '  d3 $ \n    sound "';
    for(var i=0; i<obj.d3.samples.length; i++) {
      txt += obj.d3.samples[i] + ' ';
    }
    txt += '" \n';
  };

  self.getText = function() {
    return txt;
  };

}

module.exports = JsonLoader;
