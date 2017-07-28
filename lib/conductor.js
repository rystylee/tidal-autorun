'use babel';

import JsonLoader from './json-loader';

function Conductor() {

  var self = this;
  var jsonloader = new JsonLoader();

  self.load = function() {
    jsonloader.load();
  };

}

module.exports = Conductor;
