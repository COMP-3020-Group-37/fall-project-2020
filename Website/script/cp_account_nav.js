import { Component } from './component.js';

export class AccountNavCP extends Component {
    constructor(doc, db, home, data) {
        super(doc);
        this.db = db;
        this.home = home;
        this.data = data;

        this.element = doc.createElement('div');
        this.element.className = 'sidebar-category';
        this.list = doc.createElement('ul');
        this.homeBtn = doc.createElement('li');
        this.popularBtn = doc.createElement('li');
        this.favouritesBtn = doc.createElement('li');

        this.homeBtn.innerHTML = '<i class="fa fa-home"></i><p>Home</p>';
        this.popularBtn.innerHTML = '<i class="fa fa-fire"></i><p>Popular</p>';
        this.favouritesBtn.innerHTML = '<i class="fa fa-heart"></i><p>Favourites</p>';

        this.list.appendChild(this.homeBtn);
        this.list.appendChild(this.popularBtn);
        this.list.appendChild(this.favouritesBtn);
        this.element.appendChild(this.list);

        this.activeCategory = null;

        this.homeBtn.addEventListener('click', () => {
            this.selectHome();
        });

        this.popularBtn.addEventListener('click', () => {
            this.clearSelected();

            if (this.activeCategory == this.popularBtn) {
                this.activeCategory = '';
                this.home.displayHome();
            }
            else {
                this.popularBtn.className = 'category-selected';

                this.activeCategory = this.popularBtn;
                this.home.itemsSet = db.popular;
                this.home.clearCategories();
                this.home.itemSetUpdate();
            }
        });

        this.favouritesBtn.addEventListener('click', () => {
            this.clearSelected();

            if (this.activeCategory == this.favouritesBtn) {
                this.activeCategory = '';
                this.home.displayHome();
            }
            else {
                if (db.currentAccount) {
                    this.activeCategory = this.favouritesBtn;

                    let favFoodItems = [];

                    db.currentAccount.favouriteRestaurants.forEach((restaurant) => {
                        restaurant.foodItems.forEach((foodItem) => {
                            favFoodItems.push(foodItem);
                        });
                    });

                    this.home.itemsSet = favFoodItems;
                    this.favouritesBtn.className = 'category-selected';
                }
                else {
                    this.home.displayHome();
                    alert("Need to signin or register to access this feature");
                    return false;
                }

                this.home.clearCategories();
                this.home.itemSetUpdate();
            }


        });
    }

    clearSelected() {
        if (this.activeCategory)
            this.activeCategory.className = '';
    }

    selectHome() {
        this.clearSelected();
        this.homeBtn.className = 'category-selected';

        this.activeCategory = this.homeBtn;
        this.home.itemsSet = this.home.itemsSetDefault;

        this.home.clearCategories();
        this.home.itemSetUpdate();
    }
}