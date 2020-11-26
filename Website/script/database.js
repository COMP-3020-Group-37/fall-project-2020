import { FoodItem } from './data_foodItem.js';
import { Restaurant } from './data_restaurant.js';
import { Category } from './data_category.js';
import { Account } from './data_account.js';

export class Database {
    constructor() {

        // ----- Global Variables -----

        this.yourLocation = null;
        this.currentAccount = null;
        this.cartItems = null;
        this.cartItemsCount = null;

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
        this.restaurants[0].addFoodItem(new FoodItem("McDonalds", 'description', "images/restaurants/mcdonalds/burger1.jpg", 7, 5, "Burgers"));
        this.restaurants[0].addFoodItem(new FoodItem("McDonalds", 'description', "images/restaurants/mcdonalds/burger2.jpg", 8, 4, "Burgers"));
        this.restaurants[0].addFoodItem(new FoodItem("McDonalds", 'description', "images/restaurants/mcdonalds/burger3.jpg", 9, 3, "Burgers"));
        this.restaurants[0].addFoodItem(new FoodItem("McDonalds", 'description', "images/restaurants/mcdonalds/coke.jpg", 2, 5, "Drinks"));
        this.restaurants[0].addFoodItem(new FoodItem("McDonalds", 'description', "images/restaurants/mcdonalds/fries.jpg", 2, 5, "Fries"));
        this.restaurants[0].addFoodItem(new FoodItem("McDonalds", 'description', "images/restaurants/mcdonalds/icecream.jpg", 3, 5, "Desert"));

        //burger king
        this.restaurants[1].addFoodItem(new FoodItem("Burger King", 'description', "images/restaurants/burgerking/burger1.jpg", 7, 5, "Burgers"));
        this.restaurants[1].addFoodItem(new FoodItem("Burger King", 'description', "images/restaurants/burgerking/burger2.jpg", 8, 4, "Burgers"));
        this.restaurants[1].addFoodItem(new FoodItem("Burger King", 'description', "images/restaurants/burgerking/burger3.jpg", 9, 3, "Burgers"));
        this.restaurants[1].addFoodItem(new FoodItem("Burger King", 'description', "images/restaurants/burgerking/drink1.jpg", 8, 5, "Drinks"));
        this.restaurants[1].addFoodItem(new FoodItem("Burger King", 'description', "images/restaurants/burgerking/fries.jpg", 2, 5, "Fries"));
        this.restaurants[1].addFoodItem(new FoodItem("Burger King", 'description', "images/restaurants/burgerking/wrap.jpg", 2, 5, "Wraps"));
        this.restaurants[1].addFoodItem(new FoodItem("Burger King", 'description', "images/restaurants/burgerking/wrap2.jpg", 3, 5, "Wraps"));

        //boston pizza
        this.restaurants[2].addFoodItem(new FoodItem("Boston Pizza", 'description', "images/restaurants/bostonpizza/coke.jpg", 7, 5, "Drinks"));
        this.restaurants[2].addFoodItem(new FoodItem("Boston Pizza", 'description', "images/restaurants/bostonpizza/pizza1.jpeg", 8, 4, "Pizzas"));
        this.restaurants[2].addFoodItem(new FoodItem("Boston Pizza", 'description', "images/restaurants/bostonpizza/pizza2.jpeg", 9, 3, "Pizzas"));
        this.restaurants[2].addFoodItem(new FoodItem("Boston Pizza", 'description', "images/restaurants/bostonpizza/pizza3.jpeg", 8, 5, "Pizzas"));
        this.restaurants[2].addFoodItem(new FoodItem("Boston Pizza", 'description', "images/restaurants/bostonpizza/pizza4.jpg", 2, 5, "Pizzas"));
        this.restaurants[2].addFoodItem(new FoodItem("Boston Pizza", 'description', "images/restaurants/bostonpizza/salad.png", 2, 5, "Salads"));
        this.restaurants[2].addFoodItem(new FoodItem("Boston Pizza", 'description', "images/restaurants/bostonpizza/pizza5.jpg", 3, 5, "Pizzas"));

        //pizza hut
        this.restaurants[3].addFoodItem(new FoodItem("Pizza Hut", 'description', "images/restaurants/pizzahut/garlicbread.jpg", 7, 5, "Breakfast"));
        this.restaurants[3].addFoodItem(new FoodItem("Pizza Hut", 'description', "images/restaurants/pizzahut/pepsi.jpg", 8, 4, "Drinks"));
        this.restaurants[3].addFoodItem(new FoodItem("Pizza Hut", 'description', "images/restaurants/pizzahut/pizza.jpg", 9, 3, "Pizzas"));
        this.restaurants[3].addFoodItem(new FoodItem("Pizza Hut", 'description', "images/restaurants/pizzahut/pizza1.jpg", 8, 5, "Pizzas"));
        this.restaurants[3].addFoodItem(new FoodItem("Pizza Hut", 'description', "images/restaurants/pizzahut/pizza2.png", 2, 5, "Pizzas"));
        this.restaurants[3].addFoodItem(new FoodItem("Pizza Hut", 'description', "images/restaurants/pizzahut/pizza3.png", 2, 5, "Pizzas"));
        this.restaurants[3].addFoodItem(new FoodItem("Pizza Hut", 'description', "images/restaurants/pizzahut/pizza4.png", 3, 5, "Pizzas"));

        //AW
        this.restaurants[4].addFoodItem(new FoodItem("A&W", 'description', "images/restaurants/aw/burger1.jpg", 8, 3, "Burgers"));
        this.restaurants[4].addFoodItem(new FoodItem("A&W", 'description', "images/restaurants/aw/burger2.png", 7, 5, "Burgers"));
        this.restaurants[4].addFoodItem(new FoodItem("A&W", 'description', "images/restaurants/aw/burger3.jpg", 5, 4, "Burgers"));
        this.restaurants[4].addFoodItem(new FoodItem("A&W", 'description', "images/restaurants/aw/fries.jpg", 3, 4, "Fries"));
        this.restaurants[4].addFoodItem(new FoodItem("A&W", 'description', "images/restaurants/aw/fries3.png", 5, 5, "Fries"));
        this.restaurants[4].addFoodItem(new FoodItem("A&W", 'description', "images/restaurants/aw/rootBeer.png", 2, 4, "Drinks"));

        //Earls Kitchen Bar
        this.restaurants[5].addFoodItem(new FoodItem("Earls Kitchen Bar", 'description',  "images/restaurants/earls/Earl1.jpg", 7, 4, "Salads"));
        this.restaurants[5].addFoodItem(new FoodItem("Earls Kitchen Bar", 'description',  "images/restaurants/earls/Earl2.jpg", 7, 3, "Salads"));
        this.restaurants[5].addFoodItem(new FoodItem("Earls Kitchen Bar", 'description',  "images/restaurants/earls/Earl3.jpg", 5, 4, "Burgers"));
        this.restaurants[5].addFoodItem(new FoodItem("Earls Kitchen Bar", 'description',  "images/restaurants/earls/Earl4.jpg", 4, 4, "Fries"));
        this.restaurants[5].addFoodItem(new FoodItem("Earls Kitchen Bar", 'description',  "images/restaurants/earls/Earl5.jpg", 6, 4, "Wings"));

        //Falafel Place
        this.restaurants[6].addFoodItem(new FoodItem("Falafel Place", 'description',  "images/restaurants/falafel/falafel1.jpg", 8, 3, "Wraps"));
        this.restaurants[6].addFoodItem(new FoodItem("Falafel Place", 'description',  "images/restaurants/falafel/falafel2.jpg", 6, 4, "Salads"));
        this.restaurants[6].addFoodItem(new FoodItem("Falafel Place", 'description',  "images/restaurants/falafel/falafel3.jpg", 5, 4, "Desert"));
        this.restaurants[6].addFoodItem(new FoodItem("Falafel Place", 'description',  "images/restaurants/falafel/falafel4.jpg", 4, 4, "Wraps"));
        this.restaurants[6].addFoodItem(new FoodItem("Falafel Place", 'description',  "images/restaurants/falafel/falafel5.jpg", 8, 4, "Breakfast"));

        //Freshii
        this.restaurants[7].addFoodItem(new FoodItem("Freshii", 'description',  "images/restaurants/freshii/freshii1.jpg", 5, 4, "Salads"));
        this.restaurants[7].addFoodItem(new FoodItem("Freshii", 'description',  "images/restaurants/freshii/freshii2.jpg", 6, 5, "Salads"));
        this.restaurants[7].addFoodItem(new FoodItem("Freshii", 'description',  "images/restaurants/freshii/freshii3.jpg", 5, 4, "Salads"));
        this.restaurants[7].addFoodItem(new FoodItem("Freshii", 'description',  "images/restaurants/freshii/freshii4.jpg", 5, 4, "Wraps"));
        this.restaurants[7].addFoodItem(new FoodItem("Freshii", 'description',  "images/restaurants/freshii/freshii5.jpg", 7, 5, "Salads"));
        this.restaurants[7].addFoodItem(new FoodItem("Freshii", 'description',  "images/restaurants/freshii/freshii6.jpg", 6, 4, "Salads"));
        this.restaurants[7].addFoodItem(new FoodItem("Freshii", 'description',  "images/restaurants/freshii/freshii7.jpg", 4, 3, "Salads"));

        //Montanas
        this.restaurants[8].addFoodItem(new FoodItem("Montanas", 'description',  "images/restaurants/montanas/montana1.jpg", 8, 4, "Burgers"));
        this.restaurants[8].addFoodItem(new FoodItem("Montanas", 'description',  "images/restaurants/montanas/montana2.jpg", 8, 3, "Burgers"));
        this.restaurants[8].addFoodItem(new FoodItem("Montanas", 'description',  "images/restaurants/montanas/montana3.jpg", 8, 5, "Burgers"));
        this.restaurants[8].addFoodItem(new FoodItem("Montanas", 'description',  "images/restaurants/montanas/montana4.jpg", 9, 4, "Burgers"));
        this.restaurants[8].addFoodItem(new FoodItem("Montanas", 'description',  "images/restaurants/montanas/montana5.jpg", 7, 5, "Burgers"));

        //Pita Pit
        this.restaurants[9].addFoodItem(new FoodItem("Pita Pit", 'description',  "images/restaurants/pitapit/pitapit1.jpg", 5, 4, "Wraps"));
        this.restaurants[9].addFoodItem(new FoodItem("Pita Pit", 'description',  "images/restaurants/pitapit/pitapit2.jpg", 5, 3, "Wraps"));
        this.restaurants[9].addFoodItem(new FoodItem("Pita Pit", 'description',  "images/restaurants/pitapit/pitapit3.jpg", 5, 5, "Wraps"));
        this.restaurants[9].addFoodItem(new FoodItem("Pita Pit", 'description',  "images/restaurants/pitapit/pitapit4.jpg", 5, 4, "Wraps"));
        this.restaurants[9].addFoodItem(new FoodItem("Pita Pit", 'description',  "images/restaurants/pitapit/pitapit5.jpg", 6, 3, "Salads"));

        //Smitty
        this.restaurants[10].addFoodItem(new FoodItem("Smitty's", 'description', "images/restaurants/smitty/smitty1.jpg",5,4,"Salads"));
        this.restaurants[10].addFoodItem(new FoodItem("Smitty's", 'description', "images/restaurants/smitty/smitty2.jpg",8,4,"Breakfast"));
        this.restaurants[10].addFoodItem(new FoodItem("Smitty's", 'description', "images/restaurants/smitty/smitty3.jpg",8,3,"Breakfast"));
        this.restaurants[10].addFoodItem(new FoodItem("Smitty's", 'description', "images/restaurants/smitty/smitty4.jpg",12,5,"Wings"));
        this.restaurants[10].addFoodItem(new FoodItem("Smitty's", 'description', "images/restaurants/smitty/smitty5.jpg",6,4,"Breakfast"));
        this.restaurants[10].addFoodItem(new FoodItem("Smitty's", 'description', "images/restaurants/smitty/smitty6.jpg",7,4,"Burgers"));

        //Subway
        this.restaurants[11].addFoodItem(new FoodItem("Subway", 'description', "images/restaurants/subway/subway1.jpg",5,4,"Wraps"));
        this.restaurants[11].addFoodItem(new FoodItem("Subway", 'description', "images/restaurants/subway/subway2.jpg",5,3,"Wraps"));
        this.restaurants[11].addFoodItem(new FoodItem("Subway", 'description', "images/restaurants/subway/subway3.jpg",6,4,"Wraps"));
        this.restaurants[11].addFoodItem(new FoodItem("Subway", 'description', "images/restaurants/subway/subway4.jpg",6,5,"Wraps"));
        this.restaurants[11].addFoodItem(new FoodItem("Subway", 'description', "images/restaurants/subway/subway5.jpg",4,4,"Wraps"));
        this.restaurants[11].addFoodItem(new FoodItem("Subway", 'description', "images/restaurants/subway/subway6.jpg",5,5,"Wraps"));

        //Sushi Gozen
        this.restaurants[12].addFoodItem(new FoodItem("Sushi Gozen", 'description', "images/restaurants/sushigozen/sushiGo1.jpg",10,5,"Sushi"));
        this.restaurants[12].addFoodItem(new FoodItem("Sushi Gozen", 'description', "images/restaurants/sushigozen/sushiGo2.jpg",11,5,"Sushi"));
        this.restaurants[12].addFoodItem(new FoodItem("Sushi Gozen", 'description', "images/restaurants/sushigozen/sushiGo3.jpg",8,4,"Sushi"));
        this.restaurants[12].addFoodItem(new FoodItem("Sushi Gozen", 'description', "images/restaurants/sushigozen/sushiGo4.jpg",11,4,"Sushi"));
        this.restaurants[12].addFoodItem(new FoodItem("Sushi Gozen", 'description', "images/restaurants/sushigozen/sushiGo5.jpg",12,5,"Sushi"));
        this.restaurants[12].addFoodItem(new FoodItem("Sushi Gozen", 'description', "images/restaurants/sushigozen/sushiGo6.jpg",10,5,"Sushi"));

        //Taco Time
        this.restaurants[13].addFoodItem(new FoodItem("Taco Time", 'description', "images/restaurants/tacotime/tacotime1.jpg",5,4,"Taco"));
        this.restaurants[13].addFoodItem(new FoodItem("Taco Time", 'description', "images/restaurants/tacotime/tacotime2.jpg",8,3,"Wraps"));
        this.restaurants[13].addFoodItem(new FoodItem("Taco Time", 'description', "images/restaurants/tacotime/tacotime3.jpg",4,4,"Salads"));
        this.restaurants[13].addFoodItem(new FoodItem("Taco Time", 'description', "images/restaurants/tacotime/tacotime4.jpg",3,4,"Taco"));
        this.restaurants[13].addFoodItem(new FoodItem("Taco Time", 'description', "images/restaurants/tacotime/tacotime5.jpg",11,4,"Taco"));
        this.restaurants[13].addFoodItem(new FoodItem("Taco Time", 'description', "images/restaurants/tacotime/tacotime6.jpg",11,5,"Taco"));
        this.restaurants[13].addFoodItem(new FoodItem("Taco Time", 'description', "images/restaurants/tacotime/tacotime7.jpg",10,4,"Wraps"));
        this.restaurants[13].addFoodItem(new FoodItem("Taco Time", 'description', "images/restaurants/tacotime/tacotime8.jpg",15,4,"Taco"));

        //Sushi Jet
        this.restaurants[14].addFoodItem(new FoodItem("Sushi Jet", 'description', "images/restaurants/sushi_jet/dumplings.jpg", 3, 5, "Dumplings"));
        this.restaurants[14].addFoodItem(new FoodItem("Sushi Jet", 'description', "images/restaurants/sushi_jet/iced_teas.jpg", 2, 4, "Drinks"));
        this.restaurants[14].addFoodItem(new FoodItem("Sushi Jet", 'description', "images/restaurants/sushi_jet/miso_soup.jpeg", 2, 3, "Soups"));
        this.restaurants[14].addFoodItem(new FoodItem("Sushi Jet", 'description', "images/restaurants/sushi_jet/roll1.jpg", 8, 5, "Sushi"));
        this.restaurants[14].addFoodItem(new FoodItem("Sushi Jet", 'description', "images/restaurants/sushi_jet/roll2.jpg", 9, 5, "Sushi"));
        this.restaurants[14].addFoodItem(new FoodItem("Sushi Jet", 'description', "images/restaurants/sushi_jet/roll3.jpg", 10, 5, "Sushi"));

        //Taco Del Mar
        this.restaurants[15].addFoodItem(new FoodItem("Taco Del Mar", 'description', "images/restaurants/tacodel/tacodel1.jpg",4,3,"Wraps"));
        this.restaurants[15].addFoodItem(new FoodItem("Taco Del Mar", 'description', "images/restaurants/tacodel/tacodel2.jpg",5,4,"Taco"));
        this.restaurants[15].addFoodItem(new FoodItem("Taco Del Mar", 'description', "images/restaurants/tacodel/tacodel3.jpg",5,4,"Taco"));
        this.restaurants[15].addFoodItem(new FoodItem("Taco Del Mar", 'description', "images/restaurants/tacodel/tacodel4.jpg",5,3,"Wraps"));
        this.restaurants[15].addFoodItem(new FoodItem("Taco Del Mar", 'description', "images/restaurants/tacodel/tacodel5.jpg",6,5,"Taco"));
        this.restaurants[15].addFoodItem(new FoodItem("Taco Del Mar", 'description', "images/restaurants/tacodel/tacodel6.jpg",3,4,"Taco"));
        this.restaurants[15].addFoodItem(new FoodItem("Taco Del Mar", 'description', "images/restaurants/tacodel/tacodel7.jpg",6,4,"Wraps"));

        //Tim Hortons
        this.restaurants[16].addFoodItem(new FoodItem("Tim Hortons", 'description', "images/restaurants/timhorton/timh1.jpg",10,4,"Breakfast"));
        this.restaurants[16].addFoodItem(new FoodItem("Tim Hortons", 'description', "images/restaurants/timhorton/timh2.jpg",4,4,"Drinks"));
        this.restaurants[16].addFoodItem(new FoodItem("Tim Hortons", 'description', "images/restaurants/timhorton/timh3.jpg",8,4,"Breakfast"));
        this.restaurants[16].addFoodItem(new FoodItem("Tim Hortons", 'description', "images/restaurants/timhorton/timh4.jpg",10,5,"Breakfast"));
        this.restaurants[16].addFoodItem(new FoodItem("Tim Hortons", 'description', "images/restaurants/timhorton/timh5.jpg",2,4,"Desert"));
        this.restaurants[16].addFoodItem(new FoodItem("Tim Hortons", 'description', "images/restaurants/timhorton/timh6.jpg",3,4,"Drinks"));
        this.restaurants[16].addFoodItem(new FoodItem("Tim Hortons", 'description', "images/restaurants/timhorton/timh7.jpg",2,4,"Desert"));
        this.restaurants[16].addFoodItem(new FoodItem("Tim Hortons", 'description', "images/restaurants/timhorton/timh8.jpg",8,4,"Desert"));
        this.restaurants[16].addFoodItem(new FoodItem("Tim Hortons", 'description', "images/restaurants/timhorton/timh9.jpg",2,3,"Desert"));
        this.restaurants[16].addFoodItem(new FoodItem("Tim Hortons", 'description', "images/restaurants/timhorton/timh10.jpg",3,4,"Drinks"));

        //Wendy's
        this.restaurants[17].addFoodItem(new FoodItem("Wendy's", 'description', "images/restaurants/windy/windy1.jpg",5,4,"Breakfast"));
        this.restaurants[17].addFoodItem(new FoodItem("Wendy's", 'description', "images/restaurants/windy/windy2.jpg",3,4,"Fries"));
        this.restaurants[17].addFoodItem(new FoodItem("Wendy's", 'description', "images/restaurants/windy/windy3.jpg",4,4,"Drinks"));
        this.restaurants[17].addFoodItem(new FoodItem("Wendy's", 'description', "images/restaurants/windy/windy4.jpg",5,5,"Burgers"));
        this.restaurants[17].addFoodItem(new FoodItem("Wendy's", 'description', "images/restaurants/windy/windy5.jpg",10,4,"Burgers"));
        this.restaurants[17].addFoodItem(new FoodItem("Wendy's", 'description', "images/restaurants/windy/windy6.jpg",11,5,"Burgers"));
        
        //Aroma Bistro
        this.restaurants[18].addFoodItem(new FoodItem("Aroma Bistro", 'description', "images/restaurants/aroma/aroma1.jpg",5,5,"Dumplings"));
        this.restaurants[18].addFoodItem(new FoodItem("Aroma Bistro", 'description', "images/restaurants/aroma/aroma2.jpg",4,4,"Fries"));
        this.restaurants[18].addFoodItem(new FoodItem("Aroma Bistro", 'description', "images/restaurants/aroma/aroma3.jpg",6,5,"Burgers"));
        this.restaurants[18].addFoodItem(new FoodItem("Aroma Bistro", 'description', "images/restaurants/aroma/aroma4.jpg",3,4,"Salads"));
        this.restaurants[18].addFoodItem(new FoodItem("Aroma Bistro", 'description', "images/restaurants/aroma/aroma5.jpg",5,5,"Drinks"));
        this.restaurants[18].addFoodItem(new FoodItem("Aroma Bistro", 'description', "images/restaurants/aroma/aroma6.jpg",4,5,"Desert"));

        //Menchies Frozen Yogurt
        this.restaurants[19].addFoodItem(new FoodItem("Menchies Frozen Yogurt", 'description', "images/restaurants/mfy/mfy1.jpg",6,4,"Desert"));
        this.restaurants[19].addFoodItem(new FoodItem("Menchies Frozen Yogurt", 'description', "images/restaurants/mfy/mfy2.jpg",5,4,"Desert"));
        this.restaurants[19].addFoodItem(new FoodItem("Menchies Frozen Yogurt", 'description', "images/restaurants/mfy/mfy3.jpg",7,5,"Desert"));
        this.restaurants[19].addFoodItem(new FoodItem("Menchies Frozen Yogurt", 'description', "images/restaurants/mfy/mfy4.jpg",4,4,"Desert"));
        this.restaurants[19].addFoodItem(new FoodItem("Menchies Frozen Yogurt", 'description', "images/restaurants/mfy/mfy5.jpg",6,3,"Desert"));
        this.restaurants[19].addFoodItem(new FoodItem("Menchies Frozen Yogurt", 'description', "images/restaurants/mfy/mfy6.jpg",5,5,"Desert"));

        //Sato Sushi
        this.restaurants[20].addFoodItem(new FoodItem("Sato Sushi", 'description', "images/restaurants/sato/sato1.jpg",3,5,"Sushi"));
        this.restaurants[20].addFoodItem(new FoodItem("Sato Sushi", 'description', "images/restaurants/sato/sato2.jpg",8,5,"Sushi"));
        this.restaurants[20].addFoodItem(new FoodItem("Sato Sushi", 'description', "images/restaurants/sato/sato3.jpg",4,4,"Soups"));
        this.restaurants[20].addFoodItem(new FoodItem("Sato Sushi", 'description', "images/restaurants/sato/sato4.jpg",5,4,"Sushi"));
        this.restaurants[20].addFoodItem(new FoodItem("Sato Sushi", 'description', "images/restaurants/sato/sato5.jpg",5,5,"Sushi"));
        this.restaurants[20].addFoodItem(new FoodItem("Sato Sushi", 'description', "images/restaurants/sato/sato6.jpg",6,4,"Sushi"));

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

        this.accounts[0].favourite(this.restaurants[4]);
        this.accounts[0].favourite(this.restaurants[5]);
        this.accounts[0].favourite(this.restaurants[6]);

        // ----- Set Popular -----

        this.popular = [];

        for (let i = 0; i < this.foodItems.length; i++) {
            this.popular.push(this.foodItems[i]);
        }

        for (let i = 0; i < this.popular.length; i++) {
            let ranId = Math.floor(Math.random() * this.popular.length);
            
            let tmp = this.popular[i];
            this.popular[i] = this.popular[ranId];
            this.popular[ranId] = tmp;
        }

        for (let i = 0; i < this.popular.length - 15; i++) {
            this.popular.shift(); 
        }
    }

    getRestaurant(name) {
        let rest = this.restaurants;
        for (let i = 0; i < rest.length; i++) {
            if (rest[i].name.replace(/\s/g, '') === name)
                return rest[i];
        }
    }

    
}