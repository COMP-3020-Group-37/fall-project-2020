export class FoodItem {
    constructor(name, description, iconPath, price, rating, category) {
        this.name = name;
        this.description = description;
        this.iconPath = iconPath;
        this.price = price;
        this.rating = rating;
        this.category = category;
    }

    setRestaurant(restaurant) {
        this.restaurant = restaurant;
        this.distance = restaurant.distance;
    }
}