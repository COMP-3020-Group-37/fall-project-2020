export class Category {
    constructor(name) {
        this.name = name;
        this.foodItems = []
    }

    addFoodItem(foodItem) {
        this.foodItems.push(foodItem);
    }
}