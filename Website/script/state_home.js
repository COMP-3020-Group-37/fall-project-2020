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
        this.itemSetOrderRatingDesc();

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
            let aRating = 0;
            let bRating = 0;
            if (typeof a.rating !== 'undefined') {
                aRating = a.rating;
            }
            if (typeof b.rating !== 'undefined') {
                bRating = b.rating;
            }

            return aRating - bRating;
        });
    }

    itemSetOrderRatingDesc() {
        this.itemsSet.sort((a,b) => {
            let aRating = 0;
            let bRating = 0;
            if (typeof a.rating !== 'undefined') {
                aRating = a.rating;
            }
            if (typeof b.rating !== 'undefined') {
                bRating = b.rating;
            }

            return bRating - aRating;
        });
    }

    itemSetOrderDistanceAsc() {
        this.itemsSet.sort((a,b) => {
            let aDistance = Number.MAX_SAFE_INTEGER;
            let bDistance = Number.MAX_SAFE_INTEGER;
            if (typeof a.distance !== 'undefined') {
                aDistance = a.distance;
            }
            if (typeof b.distance !== 'undefined') {
                bDistance = b.distance;
            }

            return aDistance - bDistance;
        });
    }

    itemSetOrderDistanceDesc() {
        this.itemsSet.sort((a,b) => {
            let aDistance = Number.MAX_SAFE_INTEGER;
            let bDistance = Number.MAX_SAFE_INTEGER;
            if (typeof a.distance !== 'undefined') {
                aDistance = a.distance;
            }
            if (typeof b.distance !== 'undefined') {
                bDistance = b.distance;
            }

            return bDistance - aDistance;
        });
    }

    itemSetOrderPriceAsc() {
        this.itemsSet.sort((a,b) => {
            let aPrice = Number.MAX_SAFE_INTEGER;
            let bPrice = Number.MAX_SAFE_INTEGER;
            if (typeof a.price !== 'undefined') {
                aPrice = a.price;
            }
            if (typeof b.price !== 'undefined') {
                bPrice = b.price;
            }

            return aPrice - bPrice;
        });
    }

    itemSetOrderPriceDesc() {
        this.itemsSet.sort((a,b) => {
            let aPrice = Number.MAX_SAFE_INTEGER;
            let bPrice = Number.MAX_SAFE_INTEGER;
            if (typeof a.price !== 'undefined') {
                aPrice = a.price;
            }
            if (typeof b.price !== 'undefined') {
                bPrice = b.price;
            }

            return bPrice - aPrice;
        });
    }
}