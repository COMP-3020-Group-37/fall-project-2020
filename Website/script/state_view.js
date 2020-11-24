import { State } from './state.js';
import { SideBarCartCP } from './cp_sidebar_cart.js';
import { PolicyNavCP } from './cp_policy_nav.js';

export class StateView extends State {
    constructor(sm, doc, db) {
        super('view', sm, doc, db);

        this.cartCP = new SideBarCartCP(doc);
        this.policyNavCP = new PolicyNavCP(doc);

        this.root = doc.querySelector(':root');
        this.sidebarWidth = '400px';
        this.sidebarWidthOriginal = this.root.style.getPropertyValue('--sidebar-width');
    }

    onEnter() {
        this.sidebar.appendChild(this.cartCP.element);
        this.sidebar.appendChild(this.policyNavCP.element);

        this.root.style.setProperty('--sidebar-width', this.sidebarWidth);
    }

    onExit() {
        this.main.innerHTML = '';
        this.sidebar.innerHTML = '';

        this.root.style.setProperty('--sidebar-width', this.sidebarWidthOriginal);
    }
}