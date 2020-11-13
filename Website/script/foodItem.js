import { Component } from './component.js';

export class FoodItem extends Component {
    constructor(name, iconPath, price, rating) {
        super(name);

        this.iconPath = iconPath;
        this.price = price;
        this.rating = rating;
    }

    display(restaurant) {
        let stars = ''
        for (let i = 0; i < this.rating; i++) {
            stars += '<i class="fa fa-star"></i>'
        }

        return  '<div class="card">' +
                    '<div class = "restImg">' +
                        '<img src="' + this.iconPath + '">' +
                        '<div class = "restLogo">LOGO</div>' +
                    '</div>' +
                    '<div class = "cardInfo">' +
                        '<div class = "restName">' + this.name + '</div>' +
                        '<div class = "distance">'+ restaurant.distance  + 'km' + '</div>' +
                        '<div class = "border"></div>' +
                        '<div class = "priceAndRate">' +
                            '<p>' + '$' + this.price + '.00' + '</p>' +
                            '<p>' + stars + '</p>' +
                        '</div>' +
                    '</div>' +
            '   </div>'
    }
}