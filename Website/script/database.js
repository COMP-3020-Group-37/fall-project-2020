import { FoodItem } from './data_foodItem.js';
import { Restaurant } from './data_restaurant.js';
import { Category } from './data_category.js';
import { Account } from './data_account.js';

export class Database {
    constructor() {
        this.restaurants = [
            new Restaurant("McDonalds", "images/restaurants/mcdonalds.jpg", "", 10),
            new Restaurant("Burger King", "images/restaurants/burgerking.jpg", "", 5),
            new Restaurant("Boston Pizza", "images/restaurants/boston_pizza.jpg", "", 15),
            new Restaurant("Pizza Hut", "images/restaurants/pizza_hut.jpg", "", 20),
            new Restaurant("A&W", "images/restaurants/aw.jpg", "", 12),
            new Restaurant("Earls Kitchen Bar", "images/restaurants/earls_kitchen_bar.jpg", "", 6),
            new Restaurant("Falafel Place", "images/restaurants/falafel_place.jpg", "", 9),
            new Restaurant("Freshii", "images/restaurants/freshii.jpg", "", 18),
            new Restaurant("Montanas", "images/restaurants/montanas.jpg", "", 12),
            new Restaurant("Pita Pit", "images/restaurants/pita_pit.jpg", "", 18),
            new Restaurant("Smittys", "images/restaurants/smittys.jpg", "", 22),
            new Restaurant("Subway", "images/restaurants/subway.jpg", "", 5),
            new Restaurant("Sushi Gozen", "images/restaurants/sushi_gozen.jpg", "", 17),
            new Restaurant("Taco Time", "images/restaurants/taco_time.jpg", "", 3),
            new Restaurant("Sushi Jet", "images/restaurants/sushi_jet.jpg", "", 9),
            new Restaurant("Taco Del Mar", "images/restaurants/taco_del_mar.jpg", "",11),
            new Restaurant("Tim Hortons", "images/restaurants/tim_hortons.jpg", "", 10),
            new Restaurant("Wendy's", "images/restaurants/wendys.jpg", "", 15),
            new Restaurant("Aroma Bistro", "images/restaurants/aroma_bistro.jpg", "", 5),
            new Restaurant("Menchies Frozen Yogurt", "images/restaurants/menchies_frozen_yogurt.jpg", "", 15),
            new Restaurant("Sato Sushi", "images/restaurants/sato_sushi.jpg", "", 14),
        ];

        this.foodItems = [
            new FoodItem("A&W", "images/restaurants/aw/burger1.jpg", 8, 3),
            new FoodItem("A&W", "images/restaurants/aw/burger2.png", 7, 5),
            new FoodItem("A&W", "images/restaurants/aw/burger3.jpg", 5, 4),
            new FoodItem("A&W", "images/restaurants/aw/fries.jpg", 3, 4),
            new FoodItem("A&W", "images/restaurants/aw/fries3.png", 5, 5),  
            new FoodItem("A&W", "images/restaurants/aw/rootBeer.png", 2, 4),

            new FoodItem("Sushi Jet", "images/restaurants/sushi_jet/dumplings.jpg", 8, 3),
            new FoodItem("Sushi Jet", "images/restaurants/sushi_jet/iced_teas.jpg", 8, 3),
            new FoodItem("Sushi Jet", "images/restaurants/sushi_jet/miso_soup.jpeg", 8, 3),
            new FoodItem("Sushi Jet", "images/restaurants/sushi_jet/roll1.jpg", 8, 3),
            new FoodItem("Sushi Jet", "images/restaurants/sushi_jet/roll2.jpg", 8, 3),
            new FoodItem("Sushi Jet", "images/restaurants/sushi_jet/roll3.jpg", 8, 3)
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

        //AW
        this.restaurants[4].addFoodItem(this.foodItems[0])
        this.restaurants[4].addFoodItem(this.foodItems[1])
        this.restaurants[4].addFoodItem(this.foodItems[2])
        this.restaurants[4].addFoodItem(this.foodItems[3])
        this.restaurants[4].addFoodItem(this.foodItems[4])
        this.restaurants[4].addFoodItem(this.foodItems[5])

        //Sushi Jet
        this.restaurants[14].addFoodItem(this.foodItems[6])
        this.restaurants[14].addFoodItem(this.foodItems[7])
        this.restaurants[14].addFoodItem(this.foodItems[8])
        this.restaurants[14].addFoodItem(this.foodItems[9])
        this.restaurants[14].addFoodItem(this.foodItems[10])
        this.restaurants[14].addFoodItem(this.foodItems[11])
        
        // Set Categories

        // Set Accounts
    }
}