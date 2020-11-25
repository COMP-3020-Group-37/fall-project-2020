import { State } from './state.js';
import { SideBarCartCP } from './cp_sidebar_cart.js';
import { PolicyNavCP } from './cp_policy_nav.js';
import { RestaurantInfoCP } from './cp_restaurant_info.js';
import { RestaurantMenuCP } from './cp_restaurant_menu.js';

export class StateView extends State {
    constructor(sm, doc, db) {
        super('view', sm, doc, db);

        this.cartCP = new SideBarCartCP(doc);
        this.policyNavCP = new PolicyNavCP(doc);
        this.restaurantInfoCP = new RestaurantInfoCP(doc);
        this.restaurantMenuCP = new RestaurantMenuCP(doc);

        this.root = doc.querySelector(':root');
        this.sidebarWidth = '350px';
        this.sidebarWidthOriginal = this.root.style.getPropertyValue('--sidebar-width');
    }

    onEnter() {
        this.sidebar.appendChild(this.cartCP.element);
        this.sidebar.appendChild(this.policyNavCP.element);
        this.main.appendChild(this.restaurantInfoCP.element);
        this.main.appendChild(this.restaurantMenuCP.element);
        this.main.appendChild(this.restaurantMenuCP.element2);

        this.main.className = 'main_order'
        this.root.style.setProperty('--sidebar-width', this.sidebarWidth);
    }

    onExit() {
        this.main.innerHTML = '';
        this.sidebar.innerHTML = '';

        this.main.className = 'main'
        this.root.style.setProperty('--sidebar-width', this.sidebarWidthOriginal);
    }
}