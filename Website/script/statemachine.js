import { StateHome } from './state_home.js';
import { StateView } from './state_view.js';
import { StateCart } from './state_cart.js'; 

export class StateMachine {
    constructor(wd, doc, db) {
        this.stack = [];
        this.states = [new StateHome(wd, doc, db), new StateView(wd, doc, db), new StateCart(wd, doc, db)];

        this.changeToState("#home");
    }

    changeToState(stateName) {
        let stack = this.stack;

        if (stack.length > 0) {
            let currState = stack[stack.length - 1];
            currState.Exit();
        }

        console.log(stateName);
        let targetState = this.getState(stateName);
        targetState.Enter();

        stack.push(targetState);
    }

    back() {
        let stack = this.stack;

        if (stack.length > 1) {
            let currState = stack[stack.length - 1];
            currState.Exit();

            currState = stack[stack.length - 1];
            currState.Enter();
        }
    }

    getState(name) {
        let states = this.states

        for (let i = 0; i < states.length; i++) {
            let state = states[i];

            if (state.name == name)
                return state;
        }

        console.log("No State Found With Name " + name);
    }
}