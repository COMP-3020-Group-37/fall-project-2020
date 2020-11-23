import { State } from './state.js';
import { FoodItemCP } from './cp_foodItem.js';
import { AccountNavCP } from './cp_account_nav.js';
import { CategoriesCP } from './cp_categories.js';
import { PolicyNavCP } from './cp_policy_nav.js';

export class StateHome extends State {
    constructor(sm, doc, db) {
        super('home', sm, doc, db);

        this.accountNavCP = new AccountNavCP(doc);
        this.categoriesCP = new CategoriesCP(doc, this, db.categories);
        this.policyNavCP = new PolicyNavCP(doc);

        this.itemsSet = this.db.foodItems;
        this.itemsSetDefault = this.db.foodItems;
    }

    onEnter() {
        this.main.innerHTML += '<section id="food-display" class="food-display"></section>'
        this.foodDisplay = this.doc.getElementById('food-display')

        this.itemSetUpdate();

        this.sidebar.appendChild(this.accountNavCP.element);
        this.sidebar.appendChild(this.categoriesCP.element);
        this.sidebar.appendChild(this.policyNavCP.element);
    }

    onExit() {
        this.main.innerHTML = '';
        this.sidebar.innerHTML = '';
    }

    itemSetUpdate() {
        this.foodDisplay.innerHTML = '';

        this.itemsSet.forEach((item) => {
            let itemCP = new FoodItemCP(this.doc, item);
            let element = itemCP.element;

            element.addEventListener('click', () => {
                this.sm.changeToState('view');
            });

            this.foodDisplay.appendChild(element);
        });
    }

    itemSetOrderRatingAsc() {
        this.itemsSet.sort((a,b) => {
            return a.rating - b.rating
        });

        this.itemSetUpdate();
    }

    itemSetOrderRatingDesc() {
        this.itemsSet.sort((a,b) => {
            return a.rating - b.rating
        });

        this.itemSetUpdate();
    }

    itemSetOrderDistance() {

    }

    itemSetOrderPrice() {

    }
}