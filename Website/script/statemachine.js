import { StateHome } from './state_home.js';
import { StateView } from './state_view.js';
import { StateCart } from './state_cart.js'; 

export class StateMachine {
    constructor(doc, db) {
        this.stack = [];
        this.states = [new StateHome(this, doc, db), new StateView(this, doc, db), new StateCart(this, doc, db)];

        this.changeToState("home");
    }

    changeToState(stateName) {
        let stack = this.stack;

        if (stack.length > 0) {
            let currState = stack[stack.length - 1];
            currState.Exit();
        }

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