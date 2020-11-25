import { Component } from './component.js';

export class RestaurantMenuCP extends Component {
    constructor(doc) {
        super(doc);

        this.element = doc.createElement('div');
        this.element.className = 'menu-options';
        this.element.innerHTML = '<div>Appetizers</div><div>Main</div><div>Desserts</div><div>Drinks</div>';

        this.element2 = doc.createElement('div')
        this.element2.className = 'menu'

        this.showFoodItem()
        this.showFoodItem()
        this.showFoodItem()
    }

    showFoodItem() {
        let foodImage = this.doc.createElement('div');
        foodImage.className = 'menu_item_image';
        foodImage.innerHTML = '<img src="images/restaurants//aw/burger1.jpg" class="menu_image">';
        this.element2.appendChild(foodImage);

        let foodDescription = this.doc.createElement('div');
        foodDescription.className = 'menu_item_background';
        foodDescription.innerHTML = 'Best Burger - Beef patite, pickels, onion, mayo, and ketchop';
        this.element2.appendChild(foodDescription);

        let foodAdder = this.doc.createElement('div');
        foodAdder.className = 'menu_item_background';
        foodAdder.innerHTML = '<button class="add_remove_item">+</button>';
        this.element2.appendChild(foodAdder);

        let foodCost = this.doc.createElement('div');
        foodCost.className = 'menu_item_background';
        foodCost.innerHTML = '$5.00';
        this.element2.appendChild(foodCost);

        let foodReview = this.doc.createElement('div');
        foodReview.className = 'menu_item_background';
        foodReview.innerHTML = '<i class="fa fa-star"></i>';
        this.element2.appendChild(foodReview);
    }

    
}
