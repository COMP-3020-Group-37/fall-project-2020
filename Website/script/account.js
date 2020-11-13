export class Account {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.favouriteRestaurants = [];
    }

    favourite(restaurant) {
        favouriteRestaurants.push(restaurant);
    }
}