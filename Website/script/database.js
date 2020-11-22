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
            new FoodItem("McDonalds", "images/restaurants/mcdonalds/burger1.jpg", 7, 5),
            new FoodItem("McDonalds", "images/restaurants/mcdonalds/burger2.jpg", 8, 4),
            new FoodItem("McDonalds", "images/restaurants/mcdonalds/burger3.jpg", 9, 3),
            new FoodItem("McDonalds", "images/restaurants/mcdonalds/chickenNuggets.png", 8, 5),
            new FoodItem("McDonalds", "images/restaurants/mcdonalds/coke.jpg", 2, 5),
            new FoodItem("McDonalds", "images/restaurants/mcdonalds/fries.jpg", 2, 5),
            new FoodItem("McDonalds", "images/restaurants/mcdonalds/icecream.jpg", 3, 5),

            new FoodItem("Burger King", "images/restaurants/burgerking/burger1.jpg", 7, 5),
            new FoodItem("Burger King", "images/restaurants/burgerking/burger2.jpg", 8, 4),
            new FoodItem("Burger King", "images/restaurants/burgerking/burger3.jpg", 9, 3),
            new FoodItem("Burger King", "images/restaurants/burgerking/drink1.jpg", 8, 5),
            new FoodItem("Burger King", "images/restaurants/burgerking/fries.jpg", 2, 5),
            new FoodItem("Burger King", "images/restaurants/burgerking/wrap.jpg", 2, 5),
            new FoodItem("Burger King", "images/restaurants/burgerking/wrap2.jpg", 3, 5),

            new FoodItem("Boston Pizza", "images/restaurants/bostonpizza/coke.jpg", 7, 5),
            new FoodItem("Boston Pizza", "images/restaurants/bostonpizza/pizza1.jpeg", 8, 4),
            new FoodItem("Boston Pizza", "images/restaurants/bostonpizza/pizza2.jpeg", 9, 3),
            new FoodItem("Boston Pizza", "images/restaurants/bostonpizza/pizza3.jpeg", 8, 5),
            new FoodItem("Boston Pizza", "images/restaurants/bostonpizza/pizza4.jpg", 2, 5),
            new FoodItem("Boston Pizza", "images/restaurants/bostonpizza/salad.png", 2, 5),
            new FoodItem("Boston Pizza", "images/restaurants/bostonpizza/pizza5.jpg", 3, 5),

            new FoodItem("Pizza Hut", "images/restaurants/pizzahut/garlicbread.jpg", 7, 5),
            new FoodItem("Pizza Hut", "images/restaurants/pizzahut/pepsi.jpg", 8, 4),
            new FoodItem("Pizza Hut", "images/restaurants/pizzahut/pizza.jpg", 9, 3),
            new FoodItem("Pizza Hut", "images/restaurants/pizzahut/pizza1.jpg", 8, 5),
            new FoodItem("Pizza Hut", "images/restaurants/pizzahut/pizza2.png", 2, 5),
            new FoodItem("Pizza Hut", "images/restaurants/pizzahut/pizza3.png", 2, 5),
            new FoodItem("Pizza Hut", "images/restaurants/pizzahut/pizza4.png", 3, 5),

            new FoodItem("A&W", "images/restaurants/aw/burger1.jpg", 8, 3),
            new FoodItem("A&W", "images/restaurants/aw/burger2.png", 7, 5),
            new FoodItem("A&W", "images/restaurants/aw/burger3.jpg", 5, 4),
            new FoodItem("A&W", "images/restaurants/aw/fries.jpg", 3, 4),
            new FoodItem("A&W", "images/restaurants/aw/fries3.png", 5, 5),  
            new FoodItem("A&W", "images/restaurants/aw/rootBeer.png", 2, 4),

            new FoodItem("Sushi Jet", "images/restaurants/sushi_jet/dumplings.jpg", 3, 5),
            new FoodItem("Sushi Jet", "images/restaurants/sushi_jet/iced_teas.jpg", 2, 4),
            new FoodItem("Sushi Jet", "images/restaurants/sushi_jet/miso_soup.jpeg", 2, 3),
            new FoodItem("Sushi Jet", "images/restaurants/sushi_jet/roll1.jpg", 8, 5),
            new FoodItem("Sushi Jet", "images/restaurants/sushi_jet/roll2.jpg", 9, 5),
            new FoodItem("Sushi Jet", "images/restaurants/sushi_jet/roll3.jpg", 10, 5)
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

        //McDonlads
        this.restaurants[0].addFoodItem(this.foodItems[0])
        this.restaurants[0].addFoodItem(this.foodItems[1])
        this.restaurants[0].addFoodItem(this.foodItems[2])
        this.restaurants[0].addFoodItem(this.foodItems[3])
        this.restaurants[0].addFoodItem(this.foodItems[4])
        this.restaurants[0].addFoodItem(this.foodItems[5])

        //burger king
        this.restaurants[1].addFoodItem(this.foodItems[6])
        this.restaurants[1].addFoodItem(this.foodItems[7])
        this.restaurants[1].addFoodItem(this.foodItems[8])
        this.restaurants[1].addFoodItem(this.foodItems[9])
        this.restaurants[1].addFoodItem(this.foodItems[10])
        this.restaurants[1].addFoodItem(this.foodItems[11])

        //boston pizza
        this.restaurants[2].addFoodItem(this.foodItems[12])
        this.restaurants[2].addFoodItem(this.foodItems[13])
        this.restaurants[2].addFoodItem(this.foodItems[14])
        this.restaurants[2].addFoodItem(this.foodItems[15])
        this.restaurants[2].addFoodItem(this.foodItems[16])
        this.restaurants[2].addFoodItem(this.foodItems[17])

        //pizza hut
        this.restaurants[3].addFoodItem(this.foodItems[18])
        this.restaurants[3].addFoodItem(this.foodItems[19])
        this.restaurants[3].addFoodItem(this.foodItems[20])
        this.restaurants[3].addFoodItem(this.foodItems[21])
        this.restaurants[3].addFoodItem(this.foodItems[22])
        this.restaurants[3].addFoodItem(this.foodItems[23])

        //AW
        this.restaurants[4].addFoodItem(this.foodItems[24])
        this.restaurants[4].addFoodItem(this.foodItems[25])
        this.restaurants[4].addFoodItem(this.foodItems[26])
        this.restaurants[4].addFoodItem(this.foodItems[27])
        this.restaurants[4].addFoodItem(this.foodItems[28])
        this.restaurants[4].addFoodItem(this.foodItems[29])

        //Sushi Jet
        this.restaurants[14].addFoodItem(this.foodItems[30])
        this.restaurants[14].addFoodItem(this.foodItems[31])
        this.restaurants[14].addFoodItem(this.foodItems[32])
        this.restaurants[14].addFoodItem(this.foodItems[33])
        this.restaurants[14].addFoodItem(this.foodItems[34])
        this.restaurants[14].addFoodItem(this.foodItems[35])
        
        // Set Categories

        // Set Accounts
    }
}