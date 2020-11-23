import { Component } from './component.js';

export class CategoriesCP extends Component {
    constructor(doc, home, data) {
        super(doc);
        this.home = home;
        this.data = data;

        this.element = doc.createElement('div');
        this.element.className = 'sidebar-category';
        this.heading = doc.createElement('h2');
        this.heading.innerHTML = 'Categories';
        this.list = doc.createElement('ul');
        this.list.className = 'links-column'

        this.activeCategory = null;

        this.categories = []
        this.categoriesData = []
        data.forEach((categoryData) => {
            let category = doc.createElement('li');
            category.innerHTML = '<i></i><p>' + categoryData.name + '</p>';

            this.categories.push(category);
            this.categoriesData.push(categoryData);

            category.addEventListener('click', () => {
                this.clearSelected();

                if (this.activeCategory == category) {
                    this.activeCategory = '';
                    this.home.itemsSet = this.home.itemsSetDefault;
                }
                else {
                    category.className = 'category-selected';

                    this.activeCategory = category;
                    this.home.itemsSet = categoryData.foodItems;
                }

                this.home.itemSetUpdate();
            });

            this.list.appendChild(category);
        });

        this.element.appendChild(this.heading);
        this.element.appendChild(this.list);
    }

    clearSelected() {
        if (this.activeCategory)
            this.activeCategory.className = '';
    }
}