import { Component } from './component.js';

export class CategoriesCP extends Component {
    constructor(doc, data) {
        super(doc);
        this.data = data;

        this.element = doc.createElement('div');
        this.element.className = 'sidebar-category';
        this.heading = doc.createElement('h2');
        this.heading.innerHTML = 'Categories';
        this.list = doc.createElement('ul');
        this.list.className = 'links-column'

        this.categories = []
        this.categoriesData = []
        data.forEach((categoryData) => {
            let category = doc.createElement('li');
            category.innerHTML = '<i></i><p>' + categoryData.name + '</p>';

            this.categories.push(category);
            this.categoriesData.push(categoryData);

            this.list.appendChild(category);
        });

        this.element.appendChild(this.heading);
        this.element.appendChild(this.list);
    }
}