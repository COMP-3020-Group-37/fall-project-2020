import { State } from './state.js';

export class StateCart extends State {
    constructor(wd, doc, db) {
        super('#cart', wd, doc, db);
    }

    onEnter() {

    }

    onExit() {
        this.main.innerHTML = '';
        this.sidebar.innerHTML = '';
    }
}