import { Component } from './component.js';

export class Restaurant extends Component  {
    constructor(name, iconPath, bannerPath, distance) {
        super(name);

        this.iconPath = iconPath;
        this.bannerPath = bannerPath;
        this.distance = distance;
        this.foodItems = []
    }

    addFoodItem(foodItem) {
        foodItems.push(foodItem);
    }

    display() {
        return '<div class="card"><img src='+ this.iconPath +'></div>\n';
    }
}