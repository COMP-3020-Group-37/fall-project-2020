export class Restaurant {
    constructor(name, iconPath, bannerPath, distance) {
        this.name = name;
        this.iconPath = iconPath;
        this.bannerPath = bannerPath;
        this.distance = distance;
        this.foodItems = [];
    }

    addFoodItem(foodItem) {
        this.foodItems.push(foodItem);
    }
}