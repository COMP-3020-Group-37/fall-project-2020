import { State } from './state.js';

export class StateView extends State {
    constructor(sm, doc, db) {
        super('view', sm, doc, db);
    }

    onEnter() {
        
    }

    onExit() {
        this.main.innerHTML = '';
        this.sidebar.innerHTML = '';
    }
}