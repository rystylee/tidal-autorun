'use babel';

import JsonLoader from './json-loader';
import random from './random';

function Conductor() {

  var self = this;
  var sourceCode;
  self.running = true;
  var jsonloader = new JsonLoader();
  var editor = atom.workspace.getActiveTextEditor();

  self.start = function() {

    if(self.running) {

      if(editor) {
        jsonloader.load();
        sourceCode = jsonloader.getText();
        console.log(sourceCode);

        //editor.setText('d1 $ sound "bd*2 sn arpy"');
        editor.setText(`${sourceCode}`);

        editor.moveToTop();
        editorView = atom.views.getView(editor);
        atom.commands.dispatch(editorView, 'tidalcycles:eval-multi-line');

        setTimeout(self.start, random.int(2000, 5000));
      }
    }
  };

  self.stop = function() {
    self.running = false;
    atom.commands.dispatch(editorView, 'tidalcycles:hush');
  };

  self.restart = function() {
    self.running = true;
    self.start();
  };

}

module.exports = Conductor;
