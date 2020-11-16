import { State } from './state.js';

export class StateCart extends State {
    constructor(sm, doc, db) {
        super('cart', sm, doc, db);
    }

    onEnter() {

    }

    onExit() {
        this.main.innerHTML = '';
        this.sidebar.innerHTML = '';
    }
}