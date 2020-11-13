import { Component } from './component.js';

export class FoodItem extends Component {
    constructor(name, iconPath, price, rating) {
        super(name);

        this.iconPath = iconPath;
        this.price = price;
        this.rating = rating;
    }

    display() {
        return '<div class="card"><img src='+ this.iconPath +'></div>\n';
    }
}