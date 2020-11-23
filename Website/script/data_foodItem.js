export class FoodItem {
    constructor(name, iconPath, price, rating, category) {
        this.name = name;
        this.iconPath = iconPath;
        this.price = price;
        this.rating = rating;
        this.category = category;
    }

    setRestaurant(restaurant) {
        this.restaurant = restaurant;
    }
}