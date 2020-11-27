import { State } from './state.js';
import { SideBarCartCP } from './cp_sidebar_cart.js';
import { PolicyNavCP } from './cp_policy_nav.js';
import { RestaurantInfoCP } from './cp_restaurant_info.js';
import { RestaurantMenuCP } from './cp_restaurant_menu.js';

export class StateView extends State {
    constructor(wd, doc, db) {
        super('#view', wd, doc, db);

        this.cartCP = new SideBarCartCP(doc, db);
        this.policyNavCP = new PolicyNavCP(doc);
        this.restaurantInfoCP = new RestaurantInfoCP(doc);
        this.restaurantMenuCP = new RestaurantMenuCP(doc, this.cartCP);

        this.root = doc.querySelector(':root');
        this.sidebarWidth = '350px';
        this.sidebarWidthOriginal = this.root.style.getPropertyValue('--sidebar-width');
        this.localtionBUtton = doc.getElementById('location-button');
        this.sortHeader = doc.getElementById('search-header');
    }

    onEnter() {
        let hashs = this.doc.location.hash.split("/");
        this.restaurant = this.db.getRestaurant(hashs[1]);
        this.specialID = hashs[2];

        if (this.restaurant == null)
            this.doc.location.hash = 'home';

        if (this.specialID == null)
            this.restaurantInfoCP.setIcon(this.restaurant.iconPath);
        else
            this.restaurantInfoCP.setIcon(this.restaurant.foodItems[this.specialID].iconPath)

        this.restaurantInfoCP.setRestaurant(this.restaurant);
        this.restaurantMenuCP.setRestaurant(this.restaurant, this.specialID);

        if (this.db.cartItemsCount == null)
            this.cartCP.clear();
        
        this.sidebar.appendChild(this.cartCP.element);
        //this.sidebar.appendChild(this.policyNavCP.element);
        this.main.appendChild(this.restaurantInfoCP.element);
        this.main.appendChild(this.restaurantMenuCP.element);
        this.main.appendChild(this.restaurantMenuCP.element2);

        this.main.className = 'main_order'
        this.root.style.setProperty('--sidebar-width', this.sidebarWidth);
        this.localtionBUtton.disabled = true;
        this.sortHeader.style.display = 'none';

        let testButton = this.doc.createElement('button');
        testButton.innerHTML = 'Checkout';
        testButton.className = 'btn'

        testButton.addEventListener('click', () => {
            let cartItems = [];
            let cartItemsCount = [];

            let cartElements = this.cartCP.table.children;
            for (let i = 0; i < cartElements.length; i++) {
                let element = cartElements[i];
                if (element.foodItem) {
                    cartItems.push(element.foodItem);
                    cartItemsCount.push(element.total)
                }
            }

            if (cartItems.length > 0) {
                this.db.cartItems = cartItems;
                this.db.cartItemsCount = cartItemsCount;
                this.doc.location.hash = "cart/" + this.restaurant.name.replace(/\s/g, '');
            }
            else {
                alert("Your Cart is empty, you have nothing to buy.")
            }
        });

        let backButton = this.doc.createElement('button');
        backButton.innerHTML = 'Back';
        backButton.className = 'btn mg-top';

        backButton.addEventListener('click', () => {
            this.doc.location.hash = 'home';
        });

        this.sidebar.appendChild(testButton);
        this.sidebar.appendChild(backButton);
    }

    onUpdate() {
        
    }

    onExit() {
        this.main.innerHTML = '';
        this.sidebar.innerHTML = '';
        this.restaurant = null;

        this.main.className = 'main'
        this.root.style.setProperty('--sidebar-width', this.sidebarWidthOriginal);
        this.localtionBUtton.disabled = false;
        this.sortHeader.style.display = '';
    }
}