import { Component } from './component.js';

export class RestaurantInfoCP extends Component {
    constructor(doc) {
        super(doc);

        this.element = doc.createElement('div');
        this.element.className = "restaurant-info";

        this.special = doc.createElement('div');
        this.special.className = 'special_img_background';
        this.special.innerHTML = '<img src="images\\restaurants\\aw.jpg" class="special_img">';

        this.description = doc.createElement('div');
        this.description.className = 'restaurant-description';

        this.restaurantName = doc.createElement('h1');
        this.restaurantName.innerHTML = "A & W";

        this.extraInfo = doc.createElement('div');
        this.extraInfo.className = 'rest_information'
        this.extraInfo.innerHTML =
        '<div class="hoursOfOperation">' +
        '<h2> Hours of operation: </h2>' +
        '<div class="grid-hoursOfOperation">' +
          '<div>Sunday:</div>' +
          '<div> 7am - 12am </div>' +
          '<div>Monday:</div>' +
          '<div> 7am - 12am </div>' +
          '<div>Tuesday:</div>' +
          '<div> 7am - 12am </div>' +
          '<div>Wednesday:</div>' +
          '<div> 7am - 12am </div>' +
          '<div>Thursday:</div>' +
          '<div> 7am - 12am </div>' +
          '<div>Friday:</div>' +
          '<div> 7am - 12am </div>' +
          '<div>Saturday:</div>' +
          '<div> 7am - 12am </div>' +
        '</div>' +
      '</div>' + 

      '<div class="contact_restaurant">' +
          '<h2>Contact Us:</h2>' +
          'EMAIL: aw@gmail.com <br>' +
          'PHONE NUMBER: 2048888888<br>' +
          'ADDRESS: Random Address, Winnipeg' +
      '</div>'

      this.element.appendChild(this.special);
      this.element.appendChild(this.description);
      this.description.appendChild(this.restaurantName);
      this.description.appendChild(this.extraInfo);
    }
}
