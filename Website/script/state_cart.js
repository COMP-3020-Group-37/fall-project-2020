import { State } from './state.js';
import { CheckoutCP} from './cp_checkout.js';

export class StateCart extends State {
    constructor(wd, doc, db) {
        super('#cart', wd, doc, db);

        this.root = doc.querySelector(':root');
        this.sidebarWidthOriginal = this.root.style.getPropertyValue('--sidebar-width');
        this.localtionBUtton = doc.getElementById('location-button');
        this.sortHeader = doc.getElementById('search-header');
        this.checkoutCP = new CheckoutCP(wd, doc, db);
    }

    onEnter() {
        this.main.className = ''
        this.main.appendChild(this.checkoutCP.element);
        this.main.appendChild(this.checkoutCP.element2);

        this.checkoutCP.element.addEventListener('click', () => {
            this.doc.location.hash = "view/" + this.db.cartItems[0].restaurant.name.replace(/\s/g, '');
        });

        this.checkoutCP.placeOrder.addEventListener('click', () => {

            if (this.doc.getElementById('input-phone').value == '') {
                alert("Please enter your phone number");
            }
            else {
                this.doc.getElementById('orderPlaced').style.display = 'block';
            }
        });

        this.checkoutCP.clear();
        let total = 0;
        for (let i = 0; i < this.db.cartItems.length; i++) {
            this.checkoutCP.addFoodItem(this.db.cartItems[i], this.db.cartItemsCount[i]);
            total += this.db.cartItems[i].price * this.db.cartItemsCount[i];
        }

        this.checkoutCP.setTotal(total);

        this.sidebar.style.width = '0px';
        this.sortHeader.style.display = 'none';
        this.localtionBUtton.disabled = true;
        this.localtionBUtton.children[0].remove();
        let lockIcon = this.doc.createElement('i');
        lockIcon.className = 'fa fa-lock'
        this.localtionBUtton.appendChild(lockIcon);

        this.root.style.setProperty('--sidebar-width', '0px');
    }

    onExit() {
        this.main.innerHTML = '';
        this.sidebar.innerHTML = '';

        this.sidebar.style.width = '';
        this.sortHeader.style.display = '';
        this.main.className = 'main'
        this.localtionBUtton.disabled = false;
        this.root.style.setProperty('--sidebar-width', this.sidebarWidthOriginal);

        this.localtionBUtton.children[0].remove();
        let lockIcon = this.doc.createElement('i');
        lockIcon.className = 'fa fa-chevron-down';
        this.localtionBUtton.appendChild(lockIcon);
    }
}