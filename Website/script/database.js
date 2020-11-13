import { FoodItem } from './foodItem.js';
import { Restaurant } from './restaurant.js';
import { Category } from './category.js';
import { Account } from './account.js';

export class Database {
    constructor() {
        this.restaurants = [
            new Restaurant("McDonalds", "images/mcdonalds.jpg", "", 10),
            new Restaurant("Burgar King", "images/burgerking.jpg", "", 5),
            new Restaurant("Boston Pizza", "images/boston_pizza.jpg", "", 15),
            new Restaurant("Pizza Hut", "images/pizza_hut.jpg", "", 20),
            new Restaurant("AW", "images/aw.jpg", "", 12),
        ];

        this.foodItems = [
            new FoodItem("Aroma Bistro", "images/aroma_bistro.jpg", 5, 8),
            new FoodItem("Sushi", "images/sato_sushi.jpg", 5, 8),
        ];

        this.categories = [
            new Category("Fish"),
            new Category("Sandwiches"),
            new Category("Vegetarian"),
            new Category("Burgers"),
            new Category("Desserts"),
            new Category("Pizza"),
            new Category("Breakfast"),
            new Category("Wings"),
            new Category("Smoothies"),
            new Category("Gluten Free"),
        ];

        this.accounts = [
            new Account("admin", "password"),
        ];

        // Set Restaurants
        
        // Set Categories

        // Set Accounts
    }
}