export class Account {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.favouriteRestaurants = [];
    }

    favourite(restaurant) {
        this.favouriteRestaurants.push(restaurant);
    }
}