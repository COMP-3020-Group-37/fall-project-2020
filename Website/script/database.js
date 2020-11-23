import { FoodItem } from './data_foodItem.js';
import { Restaurant } from './data_restaurant.js';
import { Category } from './data_category.js';
import { Account } from './data_account.js';

export class Database {
    constructor() {

        // ----- Set Restaurants -----

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

        // ----- Set Restaurant Food Items -----

        //McDonlads
        this.restaurants[0].addFoodItem(new FoodItem("McDonalds", "images/restaurants/mcdonalds/burger1.jpg", 7, 5, "Burgers"));
        this.restaurants[0].addFoodItem(new FoodItem("McDonalds", "images/restaurants/mcdonalds/burger2.jpg", 8, 4, "Burgers"));
        this.restaurants[0].addFoodItem(new FoodItem("McDonalds", "images/restaurants/mcdonalds/burger3.jpg", 9, 3, "Burgers"));
        this.restaurants[0].addFoodItem(new FoodItem("McDonalds", "images/restaurants/mcdonalds/chickenNuggets.png", 8, 5, "Chicken"));
        this.restaurants[0].addFoodItem(new FoodItem("McDonalds", "images/restaurants/mcdonalds/coke.jpg", 2, 5, "Drinks"));
        this.restaurants[0].addFoodItem(new FoodItem("McDonalds", "images/restaurants/mcdonalds/fries.jpg", 2, 5, "Fries"));
        this.restaurants[0].addFoodItem(new FoodItem("McDonalds", "images/restaurants/mcdonalds/icecream.jpg", 3, 5, "Desert"));

        //burger king
        this.restaurants[1].addFoodItem(new FoodItem("Burger King", "images/restaurants/burgerking/burger1.jpg", 7, 5, "Burgers"));
        this.restaurants[1].addFoodItem(new FoodItem("Burger King", "images/restaurants/burgerking/burger2.jpg", 8, 4, "Burgers"));
        this.restaurants[1].addFoodItem(new FoodItem("Burger King", "images/restaurants/burgerking/burger3.jpg", 9, 3, "Burgers"));
        this.restaurants[1].addFoodItem(new FoodItem("Burger King", "images/restaurants/burgerking/drink1.jpg", 8, 5, "Burgers"));
        this.restaurants[1].addFoodItem(new FoodItem("Burger King", "images/restaurants/burgerking/fries.jpg", 2, 5, "Burgers"));
        this.restaurants[1].addFoodItem(new FoodItem("Burger King", "images/restaurants/burgerking/wrap.jpg", 2, 5, "Burgers"));
        this.restaurants[1].addFoodItem(new FoodItem("Burger King", "images/restaurants/burgerking/wrap2.jpg", 3, 5, "Burgers"));

        //boston pizza
        this.restaurants[2].addFoodItem(new FoodItem("Boston Pizza", "images/restaurants/bostonpizza/coke.jpg", 7, 5, "Drinks"));
        this.restaurants[2].addFoodItem(new FoodItem("Boston Pizza", "images/restaurants/bostonpizza/pizza1.jpeg", 8, 4, "Pizzas"));
        this.restaurants[2].addFoodItem(new FoodItem("Boston Pizza", "images/restaurants/bostonpizza/pizza2.jpeg", 9, 3, "Pizzas"));
        this.restaurants[2].addFoodItem(new FoodItem("Boston Pizza", "images/restaurants/bostonpizza/pizza3.jpeg", 8, 5, "Pizzas"));
        this.restaurants[2].addFoodItem(new FoodItem("Boston Pizza", "images/restaurants/bostonpizza/pizza4.jpg", 2, 5, "Pizzas"));
        this.restaurants[2].addFoodItem(new FoodItem("Boston Pizza", "images/restaurants/bostonpizza/salad.png", 2, 5, "Salads"));
        this.restaurants[2].addFoodItem(new FoodItem("Boston Pizza", "images/restaurants/bostonpizza/pizza5.jpg", 3, 5, "Pizzas"));

        //pizza hut
        this.restaurants[3].addFoodItem(new FoodItem("Pizza Hut", "images/restaurants/pizzahut/garlicbread.jpg", 7, 5, "Bread"));
        this.restaurants[3].addFoodItem(new FoodItem("Pizza Hut", "images/restaurants/pizzahut/pepsi.jpg", 8, 4, "Drinks"));
        this.restaurants[3].addFoodItem(new FoodItem("Pizza Hut", "images/restaurants/pizzahut/pizza.jpg", 9, 3, "Pizzas"));
        this.restaurants[3].addFoodItem(new FoodItem("Pizza Hut", "images/restaurants/pizzahut/pizza1.jpg", 8, 5, "Pizzas"));
        this.restaurants[3].addFoodItem(new FoodItem("Pizza Hut", "images/restaurants/pizzahut/pizza2.png", 2, 5, "Pizzas"));
        this.restaurants[3].addFoodItem(new FoodItem("Pizza Hut", "images/restaurants/pizzahut/pizza3.png", 2, 5, "Pizzas"));
        this.restaurants[3].addFoodItem(new FoodItem("Pizza Hut", "images/restaurants/pizzahut/pizza4.png", 3, 5, "Pizzas"));

        //AW
        this.restaurants[4].addFoodItem(new FoodItem("A&W", "images/restaurants/aw/burger1.jpg", 8, 3, "Burgers"));
        this.restaurants[4].addFoodItem(new FoodItem("A&W", "images/restaurants/aw/burger2.png", 7, 5, "Burgers"));
        this.restaurants[4].addFoodItem(new FoodItem("A&W", "images/restaurants/aw/burger3.jpg", 5, 4, "Burgers"));
        this.restaurants[4].addFoodItem(new FoodItem("A&W", "images/restaurants/aw/fries.jpg", 3, 4, "Fries"));
        this.restaurants[4].addFoodItem(new FoodItem("A&W", "images/restaurants/aw/fries3.png", 5, 5, "Fries"));
        this.restaurants[4].addFoodItem(new FoodItem("A&W", "images/restaurants/aw/rootBeer.png", 2, 4, "Drinks"));

        //Sushi Jet
        this.restaurants[14].addFoodItem(new FoodItem("Sushi Jet", "images/restaurants/sushi_jet/dumplings.jpg", 3, 5, "Dumplings"));
        this.restaurants[14].addFoodItem(new FoodItem("Sushi Jet", "images/restaurants/sushi_jet/iced_teas.jpg", 2, 4, "Drinks"));
        this.restaurants[14].addFoodItem(new FoodItem("Sushi Jet", "images/restaurants/sushi_jet/miso_soup.jpeg", 2, 3, "Soups"));
        this.restaurants[14].addFoodItem(new FoodItem("Sushi Jet", "images/restaurants/sushi_jet/roll1.jpg", 8, 5, "Sushi"));
        this.restaurants[14].addFoodItem(new FoodItem("Sushi Jet", "images/restaurants/sushi_jet/roll2.jpg", 9, 5, "Sushi"));
        this.restaurants[14].addFoodItem(new FoodItem("Sushi Jet", "images/restaurants/sushi_jet/roll3.jpg", 10, 5, "Sushi"));
        
        // ----- Set Food Items -----

        this.foodItems = [];

        this.restaurants.forEach((restaurant) => {
            restaurant.foodItems.forEach((foodItem) => {
                this.foodItems.push(foodItem);
            });
        });

        // ----- Set Categories -----

        this.categories = [];
        this.categoriesMap = new Map();

        this.restaurants.forEach((restaurant) => {
            restaurant.foodItems.forEach((foodItem) => {
                let categoryName = foodItem.category;

                if (this.categoriesMap.has(categoryName)) {
                    let categoryID = this.categoriesMap.get(categoryName);
                    this.categories[categoryID].addFoodItem(foodItem);
                }
                else {
                    let categoryID = this.categories.push(new Category(categoryName)) - 1;
                    this.categories[categoryID].addFoodItem(foodItem);

                    this.categoriesMap.set(categoryName, categoryID)
                }
            });
        });

        // ----- Set Accounts -----

        this.accounts = [
            new Account("admin", "password"),
        ];
    }
}