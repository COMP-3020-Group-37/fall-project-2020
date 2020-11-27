import { Component } from './component.js';

export class RestaurantMenuCP extends Component {
    constructor(doc, cartCP) {
        super(doc);
        this.cartCP = cartCP;

        this.element = doc.createElement('div');
        this.element.className = 'menu-options';

        this.element2 = doc.createElement('div');
        this.element2.className = 'menu';
    }

    setRestaurant(restaurant, specialID) {
        this.element.innerHTML = '';
        this.restaurant = restaurant;
        this.specialID = specialID;

        let categories = restaurant.categories;

        this.categoryElements = [];

        this.specialFoodItem = null;
        
        for (let i = 0; i < categories.length; i++) {
            let categoryElement = this.doc.createElement('div');
            categoryElement.innerHTML = categories[i].name

            categoryElement.addEventListener('click', (event) => {
                this.showFoodCategory(i);
            });

            this.element.appendChild(categoryElement);
        }

        if (specialID == null) {
            this.showFoodCategory(0);
        } else {
            this.specialFoodItem = restaurant.foodItems[specialID];
            let categoryID = restaurant.categoriesMap.get(restaurant.foodItems[specialID].category);
            this.showFoodCategory(categoryID);
        }
    }

    showFoodCategory(categoryID) {
        this.element2.innerHTML = '';
        
        let foodItems = this.restaurant.categories[categoryID].foodItems;

        foodItems.forEach((foodItem) => {
            this.showFoodItem(foodItem);
        });
    }

    showFoodItem(foodItem, special) {
        let foodImage = this.doc.createElement('div');
        foodImage.className = 'menu_item_image';
        foodImage.innerHTML = '<img src="' + foodItem.iconPath + '" class="menu_image">';
        this.element2.appendChild(foodImage);

        let foodDescription = this.doc.createElement('div');
        foodDescription.className = 'menu_item_background';
        foodDescription.innerHTML = foodItem.name + " | " + foodItem.description;
        this.element2.appendChild(foodDescription);

        let foodAdder = this.doc.createElement('div');
        foodAdder.className = 'menu_item_background';

        let addButton = this.doc.createElement('button');
        addButton.type = 'button';
        addButton.className= 'add-button'

        let addIcon = this.doc.createElement('i');
        addIcon.className = 'fa fa-plus btn-icon';

        addButton.addEventListener('click', (event) => {
            this.cartCP.addCartItem(foodItem);
        });

        addButton.appendChild(addIcon);
        foodAdder.appendChild(addButton);
        this.element2.appendChild(foodAdder);

        let foodCost = this.doc.createElement('div');
        foodCost.className = 'menu_item_background';
        foodCost.innerHTML = '$' + foodItem.price + '.00';
        this.element2.appendChild(foodCost);

        let stars = ''
        for (let i = 0; i < foodItem.rating; i++) {
            stars += '<i class="fa fa-star"></i>'
        }

        let foodReview = this.doc.createElement('div');
        foodReview.className = 'menu_item_background';
        foodReview.innerHTML = stars;

        this.element2.appendChild(foodReview);
    }

    
}
