export class State {
    constructor(name, wd, doc, db) {
        this.name = name;
        this.wd = wd; // window
        this.doc = doc; // document
        this.db = db; // database

        this.active = false;
        this.debug = true;

        this.main = document.getElementById('main')
        this.sidebar = document.getElementById('sidebar')
    }

    Enter() {
        this.active = true;

        if (this.debug)
            console.log('Enter ' + this.name);

        this.onEnter();
    }

    Exit() {
        this.active = false;

        if (this.debug)
            console.log('Exit ' + this.name);
        
        this.onExit();
    }

    onEnter() {}

    onExit() {}
}