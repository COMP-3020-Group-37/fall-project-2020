import { FoodItem } from './data_foodItem.js';
import { Restaurant } from './data_restaurant.js';
import { Category } from './data_category.js';
import { Account } from './data_account.js';

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
            new FoodItem("Aroma Bistro", "images/aroma_bistro.jpg", 5, 4),
            new FoodItem("Sushi", "images/sato_sushi.jpg", 5, 3),
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

        this.restaurants[0].addFoodItem(this.foodItems[0])
        this.restaurants[1].addFoodItem(this.foodItems[1])
        
        // Set Categories

        // Set Accounts
    }
}