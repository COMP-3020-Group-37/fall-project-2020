import { Component } from './component.js';

export class FoodItemCP extends Component {
    constructor(doc, data) {
        super(doc);
        this.data = data;

        let stars = ''
        for (let i = 0; i < data.rating; i++) {
            stars += '<i class="fa fa-star"></i>'
        }

        this.element = doc.createElement("div");
        this.element.className = "card";

        this.element.innerHTML =    '<div class = "restImg">' +
                                        '<img src="' + data.iconPath + '">' +
                                        '<div class = "restLogo"><img class="logoImg" src="' + data.restaurant.iconPath + '"></div>' +
                                    '</div>' +
                                    '<div class = "cardInfo">' +
                                        '<div class = "restName">' + data.name + '</div>' +
                                        '<div class = "distance">'+ data.restaurant.distance  + 'km' + '</div>' +
                                        '<div class = "border"></div>' +
                                        '<div class = "priceAndRate">' +
                                            '<p>' + '$' + data.price + '.00' + '</p>' +
                                            '<p>' + stars + '</p>' +
                                        '</div>' +
                                    '</div>';

    }
}