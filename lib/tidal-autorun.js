'use babel';

import { CompositeDisposable } from 'atom';
import Conductor from './conductor';

var conductor;

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'tidal-autorun:start': () => this.start(),
      'tidal-autorun:stop': () => this.stop(),
      'tidal-autorun:restart': () => this.restart()
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
    if(conductor && conductor.running) {
      console.log('already running');
      return;
    }
    console.log('tidal-autorun start!');

    if(!conductor) { conductor = new Conductor(); }
    conductor.start();
  },

  stop() {
    console.log('tidal-autorun stop!');
    conductor.stop();
  },

  restart() {
    console.log('tidal-autorun restart!');
    conductor.restart();
  },

};
