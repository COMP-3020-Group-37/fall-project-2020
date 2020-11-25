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
        foodItem.setRestaurant(this);
    }

    getFoodItemIndex(foodItem) {
        let items = this.foodItems;
        
        for (let i = 0; i < items.length; i++) {
            if (items[i] == foodItem)
                return i;
        }
    }
}