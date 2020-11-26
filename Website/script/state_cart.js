import { State } from './state.js';

export class StateCart extends State {
    constructor(wd, doc, db) {
        super('#cart', wd, doc, db);

        this.sortHeader = doc.getElementById('search-header');
    }

    onEnter() {


        this.sortHeader.style.display = 'none';
    }

    onExit() {
        this.main.innerHTML = '';
        this.sidebar.innerHTML = '';

        this.sortHeader.style.display = '';
    }
}