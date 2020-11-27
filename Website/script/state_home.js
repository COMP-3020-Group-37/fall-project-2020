import { State } from './state.js';
import { FoodItemCP } from './cp_foodItem.js';
import { AccountNavCP } from './cp_account_nav.js';
import { CategoriesCP } from './cp_categories.js';
import { PolicyNavCP } from './cp_policy_nav.js';

export class StateHome extends State {
    constructor(wd, doc, db) {
        super('#home', wd, doc, db);

        this.accountNavCP = new AccountNavCP(doc, db, this, db.categories);
        this.categoriesCP = new CategoriesCP(doc, this, db.categories);
        this.policyNavCP = new PolicyNavCP(doc);

        this.itemsSet = this.db.foodItems;
        this.itemsSetDefault = this.db.foodItems;
        
        this.sortState = 'rating'

        doc.getElementById('sort-distance').addEventListener('click', () => {
            this.sortState = 'distance';
            this.itemSetUpdate();
            doc.getElementById('sort-options').classList.toggle('show');
        });
        doc.getElementById('sort-price').addEventListener('click', () => {
            this.sortState = 'price';
            this.itemSetUpdate();
            doc.getElementById('sort-options').classList.toggle('show');
        });
        doc.getElementById('sort-rating').addEventListener('click', () => {
            this.sortState = 'rating';
            this.itemSetUpdate();
            doc.getElementById('sort-options').classList.toggle('show');
        });
    }

    onEnter() {
        let hashs = this.doc.location.hash.split("/");
        this.db.cartItems = null;
        this.db.cartItemsCount = null;

        this.main.innerHTML += '<section id="food-display" class="food-display"></section>'
        this.foodDisplay = this.doc.getElementById('food-display')

        this.displayHome();
        this.itemSetUpdate();

        this.sidebar.appendChild(this.accountNavCP.element);
        this.sidebar.appendChild(this.categoriesCP.element);
        this.sidebar.appendChild(this.policyNavCP.element);
    }

    onUpdate() {
        
    }

    onExit() {
        this.main.innerHTML = '';
        this.sidebar.innerHTML = '';
    }

    itemSetUpdate() {
        this.foodDisplay.innerHTML = '';
    
        switch(this.sortState) {
            case 'rating':
                this.itemSetOrderRatingDesc();
                break;
            case 'distance':
                this.itemSetOrderDistanceAsc();
                break;
            case 'price':
                this.itemSetOrderPriceAsc();
                break;
            default:
                console.log("Invalid sortState " + this.sortState);
        }

        this.itemsSet.forEach((item) => {
            let itemCP = new FoodItemCP(this.doc, item);
            let element = itemCP.element;

            element.addEventListener('click', () => {
                if (this.db.yourLocation) {
                    let itemID = item.restaurant.getFoodItemIndex(item);
                    this.doc.location.hash = "view/" + item.restaurant.name.replace(/\s/g, '') + '/' + itemID;
                }
                else {
                    this.doc.getElementById('location').style.display = 'block';
                    let locationWarning = this.doc.getElementById('warning-location');
                    locationWarning.style.display = '';
                    locationWarning.innerHTML = 'Please first enter your address';
                }
            });

            this.foodDisplay.appendChild(element);
        });
    }

    displayHome() {
        this.accountNavCP.selectHome();
    }

    clearAccountNav() {
        this.accountNavCP.clearSelected();
    }

    clearCategories() {
        this.categoriesCP.clearSelected();
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