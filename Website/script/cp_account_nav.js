import { Component } from './component.js';

export class AccountNavCP extends Component {
    constructor(doc) {
        super(doc);

        this.element = doc.createElement('div');
        this.element.className = 'sidebar-category';
        this.list = doc.createElement('ul');
        this.home = doc.createElement('li');
        this.popular = doc.createElement('li');
        this.favourites = doc.createElement('li');

        this.home.innerHTML = '<i class="fa fa-home"></i><p>Home</p>';
        this.popular.innerHTML = '<i class="fa fa-fire"></i><p>Popular</p>';
        this.favourites.innerHTML = '<i class="fa fa-heart"></i><p>Favourites</p>';

        this.list.appendChild(this.home);
        this.list.appendChild(this.popular);
        this.list.appendChild(this.favourites);
        this.element.appendChild(this.list);
    }
}