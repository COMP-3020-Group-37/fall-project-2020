import { Category } from './data_category.js';

export class Restaurant {
    constructor(name, iconPath, bannerPath, distance) {
        this.name = name;
        this.iconPath = iconPath;
        this.bannerPath = bannerPath;
        this.distance = distance;
        
        this.foodItems = [];
        this.categories = [];
        this.categoriesMap = new Map();
    }

    addFoodItem(foodItem) {
        this.foodItems.push(foodItem);
        foodItem.setRestaurant(this);

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
    }

    getFoodItemIndex(foodItem) {
        let items = this.foodItems;
        
        for (let i = 0; i < items.length; i++) {
            if (items[i] == foodItem)
                return i;
        }
    }
}