'use babel';

import { CompositeDisposable } from 'atom';
import Conductor from './conductor';
import random from './random';

var conductor;

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'tidal-autorun:start': () => this.start(),
      'tidal-autorun:stop': () => this.stop()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  serialize() {
    return {
    };
  },

  start() {
    console.log('tidal-autorun start!');

    var editor = atom.workspace.getActiveTextEditor();
    if(editor) {

      // if(!conductor) {
      //   conductor = new Conductor();
      //
      //   editor.moveToTop();
      //   editorView = atom.views.getView(editor);
      //   atom.commands.dispatch(editorView, 'tidalcycles:eval-multi-line');
      // }

      if(!conductor) { conductor = new Conductor(); }
      editor.moveToTop();
      editorView = atom.views.getView(editor);
      atom.commands.dispatch(editorView, 'tidalcycles:eval-multi-line');

      conductor.load();
    }
  },

  stop() {
    console.log('tidal-autorun stop!');
    atom.commands.dispatch(editorView, 'tidalcycles:hush');
  }

};
