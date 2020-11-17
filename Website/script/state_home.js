import { State } from './state.js';
import { FoodItemCP } from './cp_foodItem.js';
import { AccountNavCP } from './cp_account_nav.js';
import { CategoriesCP } from './cp_categories.js';
import { PolicyNavCP } from './cp_policy_nav.js';

export class StateHome extends State {
    constructor(sm, doc, db) {
        super('home', sm, doc, db);

        this.accountNavCP = new AccountNavCP(doc);
        this.categoriesCP = new CategoriesCP(doc, db.categories);
        this.policyNavCP = new PolicyNavCP(doc);
    }

    onEnter() {
        this.main.innerHTML += '<section id="food-display" class="food-display"></section>'
        this.foodDisplay = this.doc.getElementById('food-display')

        this.db.restaurants.forEach((restaurant) => {
            restaurant.foodItems.forEach((foodItem) => {
                let foodItemCP = new FoodItemCP(this.doc, foodItem, restaurant);
                let element = foodItemCP.element;

                element.addEventListener('click', () => {
                    this.sm.changeToState('view');
                });
                
                this.foodDisplay.appendChild(element);
            });
        });

        this.sidebar.appendChild(this.accountNavCP.element);
        this.sidebar.appendChild(this.categoriesCP.element);
        this.sidebar.appendChild(this.policyNavCP.element);
    }

    onExit() {
        this.main.innerHTML = '';
        this.sidebar.innerHTML = '';
    }
}