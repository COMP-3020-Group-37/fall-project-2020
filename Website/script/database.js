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
            new Restaurant("McDonalds", "images/Logos/mcdonlads_logo.png", "", 10),
            new Restaurant("Burger King", "images/Logos/burger_king_logo.png", "", 5),
            new Restaurant("Boston Pizza", "images/Logos/boston_pizza.png", "", 15),
            new Restaurant("Pizza Hut", "images/Logos/pizzahut.png", "", 20),
            new Restaurant("A&W", "images/Logos/a_w_logo.png", "", 12),
            new Restaurant("Earls Kitchen Bar", "images/Logos/earls_kitchen_logo.png", "", 6),
            new Restaurant("Falafel Place", "images/Logos/falafel.png", "", 9),
            new Restaurant("Freshii", "images/Logos/freshii_logo.png", "", 18),
            new Restaurant("Montanas", "images/Logos/montanas_logo.png", "", 12),
            new Restaurant("Pita Pit", "images/Logos/pitapit.jpg", "", 18),
            new Restaurant("Smittys", "images/Logos/smittys.png", "", 22),
            new Restaurant("Subway", "images/Logos/subway.png", "", 5),
            new Restaurant("Sushi Gozen", "images/Logos/sushigozen.png", "", 17),
            new Restaurant("Taco Time", "images/Logos/tacotime.jpg", "", 3),
            new Restaurant("Sushi Jet", "images/Logos/sushijet.jpg", "", 9),
            new Restaurant("Taco Del Mar", "images/Logos/tacoelmar.jpg", "",11),
            new Restaurant("Tim Hortons", "images/Logos/tims.png", "", 10),
            new Restaurant("Wendy's", "images/Logos/wendys.png", "", 15),
            new Restaurant("Aroma Bistro", "images/Logos/aroma.png", "", 5),
            new Restaurant("Menchies Frozen Yogurt", "images/Logos/frozeyogurt.png", "", 15),
            new Restaurant("Sato Sushi", "images/Logos/satosushi.png", "", 14),
        ];

        // ----- Set Restaurant Food Items -----

        //McDonlads
        this.restaurants[0].addFoodItem(new FoodItem("Cheeseburger", 'Beef patty, 2 slices of cheddar, tomato, lettuce, and mayo', "images/restaurants/mcdonalds/burger1.jpg", 7, 5, "Burgers"));
        this.restaurants[0].addFoodItem(new FoodItem("Burger", 'Beef patty, tomato, lettuce, red onion, and pickels ', "images/restaurants/mcdonalds/burger2.jpg", 8, 4, "Burgers"));
        this.restaurants[0].addFoodItem(new FoodItem("Yummy Burger", 'Beef patty, cheddar, bacon, onion, and pickles', "images/restaurants/mcdonalds/burger3.jpg", 9, 3, "Burgers"));
        this.restaurants[0].addFoodItem(new FoodItem("Cola", 'Coca Cola', "images/restaurants/mcdonalds/coke.jpg", 2, 5, "Drinks"));
        this.restaurants[0].addFoodItem(new FoodItem("Fries", 'Small delicious fries', "images/restaurants/mcdonalds/fries.jpg", 2, 5, "Fries"));
        this.restaurants[0].addFoodItem(new FoodItem("Ice cream", 'Vanilla ice cream', "images/restaurants/mcdonalds/icecream.jpg", 3, 5, "Desert"));

        //burger king
        this.restaurants[1].addFoodItem(new FoodItem("Whopper", 'Beef patty, pickels, tomato, onion, and lettuce', "images/restaurants/burgerking/burger1.jpg", 7, 5, "Burgers"));
        this.restaurants[1].addFoodItem(new FoodItem("Impossible Whopper", 'Double beef patty, double layer cheddar, bacon, pickles, onion, tomato, and lettuce', "images/restaurants/burgerking/burger2.jpg", 8, 4, "Burgers"));
        this.restaurants[1].addFoodItem(new FoodItem("King single", 'Beef patty, pickels, tomato, onion, and lettuce', "images/restaurants/burgerking/burger3.jpg", 9, 3, "Burgers"));
        this.restaurants[1].addFoodItem(new FoodItem("Special Drink", '', "images/restaurants/burgerking/drink1.jpg", 8, 5, "Drinks"));
        this.restaurants[1].addFoodItem(new FoodItem("Fries", 'Medius classic fries', "images/restaurants/burgerking/fries.jpg", 2, 5, "Fries"));
        this.restaurants[1].addFoodItem(new FoodItem("King wrap", 'Beed warp with pickles, lettuce, tomato, and special sauce', "images/restaurants/burgerking/wrap.jpg", 2, 5, "Wraps"));
        this.restaurants[1].addFoodItem(new FoodItem("Original wrap", 'Check warp with cheese, lettuce, and tomato', "images/restaurants/burgerking/wrap2.jpg", 3, 5, "Wraps"));

        //boston pizza
        this.restaurants[2].addFoodItem(new FoodItem("Drink", 'Coca Cola', "images/restaurants/bostonpizza/coke.jpg", 7, 5, "Drinks"));
        this.restaurants[2].addFoodItem(new FoodItem("Amigo Pizza", 'Our special pizza with cherry tomato, chicken and mozzarella', "images/restaurants/bostonpizza/pizza1.jpeg", 8, 4, "Pizzas"));
        this.restaurants[2].addFoodItem(new FoodItem("Royal Pizza", 'Pizza with green onion, ground beef and lots of cheese ', "images/restaurants/bostonpizza/pizza2.jpeg", 9, 3, "Pizzas"));
        this.restaurants[2].addFoodItem(new FoodItem("Meteor Pizza", 'Pizza with meat, red onion, and our special sauce', "images/restaurants/bostonpizza/pizza3.jpeg", 8, 5, "Pizzas"));
        this.restaurants[2].addFoodItem(new FoodItem("Viva Italia", 'Pizza with green onion, tomato, and 3 types of cheese', "images/restaurants/bostonpizza/pizza4.jpg", 2, 5, "Pizzas"));
        this.restaurants[2].addFoodItem(new FoodItem("Special salad", 'Chicken salad with pecan, cucumber, cheddar, bacon, tomato, carrots and lettuce', "images/restaurants/bostonpizza/salad.png", 2, 5, "Salads"));
        this.restaurants[2].addFoodItem(new FoodItem("Deluxe pizza", 'Pizza with black olives, pepperoni, and green pepper', "images/restaurants/bostonpizza/pizza5.jpg", 3, 5, "Pizzas"));

        //pizza hut
        this.restaurants[3].addFoodItem(new FoodItem("Garlic bread", 'Garlic bread with cheese, 4 pieces', "images/restaurants/pizzahut/garlicbread.jpg", 7, 5, "Breakfast"));
        this.restaurants[3].addFoodItem(new FoodItem("Drink", 'Pepsi Cola', "images/restaurants/pizzahut/pepsi.jpg", 8, 4, "Drinks"));
        this.restaurants[3].addFoodItem(new FoodItem("Crazy pizza", 'Pizza with red onion, red pepper, and chicken', "images/restaurants/pizzahut/pizza.jpg", 9, 3, "Pizzas"));
        this.restaurants[3].addFoodItem(new FoodItem("Amigo Pizza", 'Pepperoni pizza with red onion', "images/restaurants/pizzahut/pizza1.jpg", 8, 5, "Pizzas"));
        this.restaurants[3].addFoodItem(new FoodItem("Royal Pizza", 'Pizza with tomato, pesto and lots of cheese', "images/restaurants/pizzahut/pizza2.png", 2, 5, "Pizzas"));
        this.restaurants[3].addFoodItem(new FoodItem("Supreme Pizza", 'Pineapple and ham pizza', "images/restaurants/pizzahut/pizza3.png", 2, 5, "Pizzas"));
        this.restaurants[3].addFoodItem(new FoodItem("Deluxe pizza", 'Pizza with red onion, tomato, pesto, and ham', "images/restaurants/pizzahut/pizza4.png", 3, 5, "Pizzas"));

        //AW
        this.restaurants[4].addFoodItem(new FoodItem("Teen burger", 'Beef patty with onion, pickles and sauce', "images/restaurants/aw/burger1.jpg", 8, 3, "Burgers"));
        this.restaurants[4].addFoodItem(new FoodItem("Mozza burger", 'Doubled beef burger with double chadder, tomato, onion, and lettuce', "images/restaurants/aw/burger2.png", 7, 5, "Burgers"));
        this.restaurants[4].addFoodItem(new FoodItem("MAMA burger", 'Cheese burger with caramelized onions, tomato, and lettuce', "images/restaurants/aw/burger3.jpg", 5, 4, "Burgers"));
        this.restaurants[4].addFoodItem(new FoodItem("Fries", 'Russet thick cut fries', "images/restaurants/aw/fries.jpg", 3, 4, "Fries"));
        this.restaurants[4].addFoodItem(new FoodItem("Poutine", 'Loaded fried with ground beef and cheese', "images/restaurants/aw/fries3.png", 5, 5, "Fries"));
        this.restaurants[4].addFoodItem(new FoodItem("Drink", 'A&W root beer', "images/restaurants/aw/rootBeer.png", 2, 4, "Drinks"));

        //Earls Kitchen Bar
        this.restaurants[5].addFoodItem(new FoodItem("Crazy salas", 'Red cabbage salad with avocado and chicken',  "images/restaurants/earls/Earl1.jpg", 7, 4, "Salads"));
        this.restaurants[5].addFoodItem(new FoodItem("Caesar salad", 'Caesar salad with chicken',  "images/restaurants/earls/Earl2.jpg", 7, 3, "Salads"));
        this.restaurants[5].addFoodItem(new FoodItem("Crazy burger", 'SPECIAL burger with cheese, pickles, bacon, mashrooms and red onion',  "images/restaurants/earls/Earl3.jpg", 5, 4, "Burgers"));
        this.restaurants[5].addFoodItem(new FoodItem("Fries", 'Seasoned fries',  "images/restaurants/earls/Earl4.jpg", 4, 4, "Fries"));
        this.restaurants[5].addFoodItem(new FoodItem("Spicy Wings", 'Spicy wings with a special sauce',  "images/restaurants/earls/Earl5.jpg", 6, 4, "Wings"));

        //Falafel Place
        this.restaurants[6].addFoodItem(new FoodItem("Power wrap", 'Shawarma wrap with tomato and lettuce',  "images/restaurants/falafel/falafel1.jpg", 8, 3, "Wraps"));
        this.restaurants[6].addFoodItem(new FoodItem("Falafel salad", 'Special falafel salad',  "images/restaurants/falafel/falafel2.jpg", 6, 4, "Salads"));
        this.restaurants[6].addFoodItem(new FoodItem("Best pancakes", 'Berry pancakes',  "images/restaurants/falafel/falafel3.jpg", 5, 4, "Desert"));
        this.restaurants[6].addFoodItem(new FoodItem("Good Pita", 'Falafel in a pita with a fresh salad and sauce',  "images/restaurants/falafel/falafel4.jpg", 4, 4, "Wraps"));
        this.restaurants[6].addFoodItem(new FoodItem("Ultimate breakfast", 'Amazing breakfast with falafel balls',  "images/restaurants/falafel/falafel5.jpg", 8, 4, "Breakfast"));

        //Freshii
        this.restaurants[7].addFoodItem(new FoodItem("Freshii", 'Vegatable salad with boiled eggs and bacon',  "images/restaurants/freshii/freshii1.jpg", 5, 4, "Salads"));
        this.restaurants[7].addFoodItem(new FoodItem("Freshii", 'Rice salad with avocado and beans',  "images/restaurants/freshii/freshii2.jpg", 6, 5, "Salads"));
        this.restaurants[7].addFoodItem(new FoodItem("Freshii", 'Beet salad with carrots, quinoa, cheese, and cranberries',  "images/restaurants/freshii/freshii3.jpg", 5, 4, "Salads"));
        this.restaurants[7].addFoodItem(new FoodItem("Freshii", 'chicken wrap with pineapple and lettuce',  "images/restaurants/freshii/freshii4.jpg", 5, 4, "Wraps"));
        this.restaurants[7].addFoodItem(new FoodItem("Freshii", 'Smoothie with banana, strawberry, and pineapple  ',  "images/restaurants/freshii/freshii5.jpg", 7, 5, "Desert"));
        this.restaurants[7].addFoodItem(new FoodItem("Freshii", 'Rice noodle salad with tofu nd broccoli',  "images/restaurants/freshii/freshii6.jpg", 6, 4, "Salads"));
        this.restaurants[7].addFoodItem(new FoodItem("Freshii", 'Rice salad with corn, avocado, beans, and tomato',  "images/restaurants/freshii/freshii7.jpg", 4, 3, "Salads"));

        //Montanas
        this.restaurants[8].addFoodItem(new FoodItem("PAPA burger", 'Cheeseburger with lettuce and fried onion and fries on side',  "images/restaurants/montanas/montana1.jpg", 8, 4, "Burgers"));
        this.restaurants[8].addFoodItem(new FoodItem("DELUXE burger", 'Cheeseburger, bacon, onion rings and fries',  "images/restaurants/montanas/montana2.jpg", 8, 3, "Burgers"));
        this.restaurants[8].addFoodItem(new FoodItem("SPICY burger", 'lettuce, burger, cheddar, fried onions and jalapeno',  "images/restaurants/montanas/montana3.jpg", 8, 5, "Burgers"));
        this.restaurants[8].addFoodItem(new FoodItem("CRAZY burger", 'Cheeseburger with sausage and lettuce',  "images/restaurants/montanas/montana4.jpg", 9, 4, "Burgers"));
        this.restaurants[8].addFoodItem(new FoodItem("KING burger", 'Double burger with cheese and BBQ sauce',  "images/restaurants/montanas/montana5.jpg", 7, 5, "Burgers"));

        //Pita Pit
        this.restaurants[9].addFoodItem(new FoodItem("Basic wrap", 'Chicken wrap with lettuce and sauce',  "images/restaurants/pitapit/pitapit1.jpg", 5, 4, "Wraps"));
        this.restaurants[9].addFoodItem(new FoodItem("Veggie wrap", 'Whole wheat wrap with vegatables',  "images/restaurants/pitapit/pitapit2.jpg", 5, 3, "Wraps"));
        this.restaurants[9].addFoodItem(new FoodItem("Caesar wrap", 'Caesar wrap with chicken',  "images/restaurants/pitapit/pitapit3.jpg", 5, 5, "Wraps"));
        this.restaurants[9].addFoodItem(new FoodItem("Crazy wrap", 'Beef wrap with red pepper and vegatables',  "images/restaurants/pitapit/pitapit4.jpg", 5, 4, "Wraps"));
        this.restaurants[9].addFoodItem(new FoodItem("DELUXE salad", 'Salad in a box with greens and feta cheese',  "images/restaurants/pitapit/pitapit5.jpg", 6, 3, "Salads"));

        //Smitty
        this.restaurants[10].addFoodItem(new FoodItem("Health salad", 'Vegatable salad with boiled eggs, chicken, and bacon', "images/restaurants/smitty/smitty1.jpg",5,4,"Salads"));
        this.restaurants[10].addFoodItem(new FoodItem("Everything in one", 'Omelette with spinach and potatoes', "images/restaurants/smitty/smitty2.jpg",8,4,"Breakfast"));
        this.restaurants[10].addFoodItem(new FoodItem("Best morning", 'Fried eggs with potatoes, bacon, and bread ', "images/restaurants/smitty/smitty3.jpg",8,3,"Breakfast"));
        this.restaurants[10].addFoodItem(new FoodItem("Crazy wings", '2 types of wings, regular and spicy', "images/restaurants/smitty/smitty4.jpg",12,5,"Wings"));
        this.restaurants[10].addFoodItem(new FoodItem("All you can think of", 'Breakfast deal with all the goods', "images/restaurants/smitty/smitty5.jpg",6,4,"Breakfast"));
        this.restaurants[10].addFoodItem(new FoodItem("Buddy burger", 'Burger with onion rings, tomato, lettuce, bacon, and red onion', "images/restaurants/smitty/smitty6.jpg",7,4,"Burgers"));

        //Subway
        this.restaurants[11].addFoodItem(new FoodItem("Basic wrap", 'Chicken wrap with vegatables', "images/restaurants/subway/subway1.jpg",5,4,"Wraps"));
        this.restaurants[11].addFoodItem(new FoodItem("Special wrap", 'Ham wrap with tomatoes, cucumber, and lettuce', "images/restaurants/subway/subway2.jpg",5,3,"Wraps"));
        this.restaurants[11].addFoodItem(new FoodItem("Spicy wrap", 'Spicy beef wrap with lettuce', "images/restaurants/subway/subway3.jpg",6,4,"Wraps"));
        this.restaurants[11].addFoodItem(new FoodItem("Deluxe wrap", 'Steak and cheese wrap', "images/restaurants/subway/subway4.jpg",6,5,"Wraps"));
        this.restaurants[11].addFoodItem(new FoodItem("Tired wrap", 'Meatball marinara wrap', "images/restaurants/subway/subway5.jpg",4,4,"Wraps"));
        this.restaurants[11].addFoodItem(new FoodItem("MAMA wrap", 'Sweet onion chicken teriyaki wrap', "images/restaurants/subway/subway6.jpg",5,5,"Wraps"));

        //Sushi Gozen
        this.restaurants[12].addFoodItem(new FoodItem("Dragon roll", 'Shrimp roll with cucumbers and avocado', "images/restaurants/sushigozen/sushiGo1.jpg",10,5,"Sushi"));
        this.restaurants[12].addFoodItem(new FoodItem("Combo 3", 'Combo with 3 special rolls', "images/restaurants/sushigozen/sushiGo2.jpg",11,5,"Sushi"));
        this.restaurants[12].addFoodItem(new FoodItem("Dynamite roll", 'Dynamite roll with avocado and shrimp', "images/restaurants/sushigozen/sushiGo3.jpg",8,4,"Sushi"));
        this.restaurants[12].addFoodItem(new FoodItem("Combo 1", 'Combo for one with fresh salmon and tuna', "images/restaurants/sushigozen/sushiGo4.jpg",11,4,"Sushi"));
        this.restaurants[12].addFoodItem(new FoodItem("Combo 2", 'Combo for two with 3 special rolls', "images/restaurants/sushigozen/sushiGo5.jpg",12,5,"Sushi"));
        this.restaurants[12].addFoodItem(new FoodItem("Rainbow roll", 'Rainbow roll with white fish, salmon, and tuna', "images/restaurants/sushigozen/sushiGo6.jpg",10,5,"Sushi"));

        //Taco Time
        this.restaurants[13].addFoodItem(new FoodItem("Yummy taco", 'Taco with ground beef and fresh salad - 1 piece', "images/restaurants/tacotime/tacotime1.jpg",5,4,"Taco"));
        this.restaurants[13].addFoodItem(new FoodItem("Cheesy taco", 'Taco wrap with cheese tots', "images/restaurants/tacotime/tacotime2.jpg",8,3,"Wraps"));
        this.restaurants[13].addFoodItem(new FoodItem("Taco salad", 'various veggies and special sauce', "images/restaurants/tacotime/tacotime3.jpg",4,4,"Salads"));
        this.restaurants[13].addFoodItem(new FoodItem("Fire taco", 'Special spicy taco with cheese and beef', "images/restaurants/tacotime/tacotime4.jpg",3,4,"Taco"));
        this.restaurants[13].addFoodItem(new FoodItem("2 for 1", '2 Tacos with crispy cheese and salad', "images/restaurants/tacotime/tacotime6.jpg",11,5,"Taco"));
        this.restaurants[13].addFoodItem(new FoodItem("Deluxe wrap", 'Beef wrap with cheese, lettuce, and cheese bits on side', "images/restaurants/tacotime/tacotime7.jpg",10,4,"Wraps"));
        this.restaurants[13].addFoodItem(new FoodItem("Big Buddy", 'Full meal with wrap, taco, nachos and cheese bits', "images/restaurants/tacotime/tacotime8.jpg",15,4,"Taco"));

        //Sushi Jet
        this.restaurants[14].addFoodItem(new FoodItem("Special dumplings", 'Chicken dumplings', "images/restaurants/sushi_jet/dumplings.jpg", 3, 5, "Dumplings"));
        this.restaurants[14].addFoodItem(new FoodItem("Drink", 'Iced tea', "images/restaurants/sushi_jet/iced_teas.jpg", 2, 4, "Drinks"));
        this.restaurants[14].addFoodItem(new FoodItem("Miso soup", 'Miso soup', "images/restaurants/sushi_jet/miso_soup.jpeg", 2, 3, "Soups"));
        this.restaurants[14].addFoodItem(new FoodItem("dynamite roll", 'dynamite roll with shrimp, avocado and tobiko', "images/restaurants/sushi_jet/roll1.jpg", 8, 5, "Sushi"));
        this.restaurants[14].addFoodItem(new FoodItem("Crazy roll", 'spicy salmon with avocado, topped with smoked salmon', "images/restaurants/sushi_jet/roll2.jpg", 9, 5, "Sushi"));
        this.restaurants[14].addFoodItem(new FoodItem("Jet roll", 'shrimp, cucumber, fish egg, and smoked salmon', "images/restaurants/sushi_jet/roll3.jpg", 10, 5, "Sushi"));

        //Taco Del Mar
        this.restaurants[15].addFoodItem(new FoodItem("Cheesy wrap", 'Beans wrap with chicken and melted cheese', "images/restaurants/tacodel/tacodel1.jpg",4,3,"Wraps"));
        this.restaurants[15].addFoodItem(new FoodItem("Chicken taco", 'fried chicken taco with vegatables', "images/restaurants/tacodel/tacodel2.jpg",5,4,"Taco"));
        this.restaurants[15].addFoodItem(new FoodItem("Veggie taco", 'vegaterian taco', "images/restaurants/tacodel/tacodel3.jpg",5,4,"Taco"));
        this.restaurants[15].addFoodItem(new FoodItem("Big PAPA meal", 'burrito wrap with meat, tomato salad and beans', "images/restaurants/tacodel/tacodel4.jpg",5,3,"Wraps"));
        this.restaurants[15].addFoodItem(new FoodItem("Mexico taco", 'tomato, cheese, and seasoned chicken taco', "images/restaurants/tacodel/tacodel5.jpg",6,5,"Taco"));
        this.restaurants[15].addFoodItem(new FoodItem("Fire taco", 'Avocado spicy taco', "images/restaurants/tacodel/tacodel6.jpg",3,4,"Taco"));
        this.restaurants[15].addFoodItem(new FoodItem("Vegatarian taco", 'Vegaterian taco', "images/restaurants/tacodel/tacodel7.jpg",6,4,"Wraps"));

        //Tim Hortons
        this.restaurants[16].addFoodItem(new FoodItem("Good morning meal", 'Chocolate donut with coffee', "images/restaurants/timhorton/timh1.jpg",10,4,"Breakfast"));
        this.restaurants[16].addFoodItem(new FoodItem("Drink", 'coffee', "images/restaurants/timhorton/timh2.jpg",4,4,"Drinks"));
        this.restaurants[16].addFoodItem(new FoodItem("Energy meal", 'breakfast wrap with a drink', "images/restaurants/timhorton/timh3.jpg",8,4,"Breakfast"));
        this.restaurants[16].addFoodItem(new FoodItem("Brunch sandwich", 'sandwich with meat, eggs, and cheese, with coffee', "images/restaurants/timhorton/timh4.jpg",10,5,"Breakfast"));
        this.restaurants[16].addFoodItem(new FoodItem("Holiday donut", 'Christamas donut', "images/restaurants/timhorton/timh5.jpg",2,4,"Desert"));
        this.restaurants[16].addFoodItem(new FoodItem("Hot drink", 'tea', "images/restaurants/timhorton/timh6.jpg",3,4,"Drinks"));
        this.restaurants[16].addFoodItem(new FoodItem("Happy donut", 'Colorful donut', "images/restaurants/timhorton/timh7.jpg",2,4,"Desert"));
        this.restaurants[16].addFoodItem(new FoodItem("Crazy donut", 'Sweet donut', "images/restaurants/timhorton/timh9.jpg",2,3,"Desert"));
        this.restaurants[16].addFoodItem(new FoodItem("Drink", 'Iced coffee', "images/restaurants/timhorton/timh10.jpg",3,4,"Drinks"));

        //Wendy's
        this.restaurants[17].addFoodItem(new FoodItem("Energy Sandwich", 'Sandwich bacon and cheese', "images/restaurants/windy/windy1.jpg",5,4,"Breakfast"));
        this.restaurants[17].addFoodItem(new FoodItem("House fries", 'Seasoned with special seasons', "images/restaurants/windy/windy2.jpg",3,4,"Fries"));
        this.restaurants[17].addFoodItem(new FoodItem("Milkshake", 'Vanilla and cookies', "images/restaurants/windy/windy3.jpg",4,4,"Drinks"));
        this.restaurants[17].addFoodItem(new FoodItem("Teen burger", 'cheeseburger with lettuce, tomato and onion', "images/restaurants/windy/windy4.jpg",5,5,"Burgers"));
        this.restaurants[17].addFoodItem(new FoodItem("Power meal", 'Full meal with cheeseburger, fries, and drink', "images/restaurants/windy/windy5.jpg",10,4,"Burgers"));
        this.restaurants[17].addFoodItem(new FoodItem("PAPA meal", 'double cheeseburger and fries', "images/restaurants/windy/windy6.jpg",11,5,"Burgers"));
        
        //Aroma Bistro
        this.restaurants[18].addFoodItem(new FoodItem("Dumpling soup", 'Dumpling soup', "images/restaurants/aroma/aroma1.jpg",5,5,"Dumplings"));
        this.restaurants[18].addFoodItem(new FoodItem("Big party meal", 'Full meal with fries', "images/restaurants/aroma/aroma2.jpg",4,4,"Fries"));
        this.restaurants[18].addFoodItem(new FoodItem("Crazy burger", 'Loaded burger', "images/restaurants/aroma/aroma3.jpg",6,5,"Burgers"));
        this.restaurants[18].addFoodItem(new FoodItem("Energy salad", 'lettuce salad with black olives', "images/restaurants/aroma/aroma4.jpg",3,4,"Salads"));
        this.restaurants[18].addFoodItem(new FoodItem("Special Drink", 'Fresh lemonade', "images/restaurants/aroma/aroma5.jpg",5,5,"Drinks"));
        this.restaurants[18].addFoodItem(new FoodItem("Special cake", 'Cheese cake', "images/restaurants/aroma/aroma6.jpg",4,5,"Desert"));

        //Menchies Frozen Yogurt
        this.restaurants[19].addFoodItem(new FoodItem("A yogurt", 'Everything yogurt', "images/restaurants/mfy/mfy1.jpg",6,4,"Desert"));
        this.restaurants[19].addFoodItem(new FoodItem("B yogurt", 'Vanilla yogurt', "images/restaurants/mfy/mfy2.jpg",5,4,"Desert"));
        this.restaurants[19].addFoodItem(new FoodItem("C yogurt", 'chocolate yogurt', "images/restaurants/mfy/mfy3.jpg",7,5,"Desert"));
        this.restaurants[19].addFoodItem(new FoodItem("D yogurt", 'Waffle yogurt', "images/restaurants/mfy/mfy4.jpg",4,4,"Desert"));
        this.restaurants[19].addFoodItem(new FoodItem("E yogurt", 'Special waffle yogurt', "images/restaurants/mfy/mfy5.jpg",6,3,"Desert"));
        this.restaurants[19].addFoodItem(new FoodItem("F yogurt", 'Candy yogurt', "images/restaurants/mfy/mfy6.jpg",5,5,"Desert"));

        //Sato Sushi
        this.restaurants[20].addFoodItem(new FoodItem("Nigiri", '2 pieces of nigiri', "images/restaurants/sato/sato1.jpg",3,5,"Sushi"));
        this.restaurants[20].addFoodItem(new FoodItem("Party roll", '2 special salmon rolls', "images/restaurants/sato/sato2.jpg",8,5,"Sushi"));
        this.restaurants[20].addFoodItem(new FoodItem("Ramen soup", 'Ramen soup with chicken', "images/restaurants/sato/sato3.jpg",4,4,"Soups"));
        this.restaurants[20].addFoodItem(new FoodItem("Philadelphia roll", 'cream cheese, crab meat, and avocado', "images/restaurants/sato/sato4.jpg",5,4,"Sushi"));
        this.restaurants[20].addFoodItem(new FoodItem("Sato Sushi", 'Spicy salmon roll', "images/restaurants/sato/sato5.jpg",5,5,"Sushi"));
        this.restaurants[20].addFoodItem(new FoodItem("Crazy combo", 'Salmon combo for one', "images/restaurants/sato/sato6.jpg",6,4,"Sushi"));

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