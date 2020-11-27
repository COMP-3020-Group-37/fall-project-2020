import { Component } from './component.js';

export class SideBarCartCP extends Component {
    constructor(doc, db) {
        super(doc);
        this.db = db;

        this.element = doc.createElement('div');
        this.element.className = 'sidebar-category'

        this.cart = doc.createElement('div');
        this.cart.className = 'cart';

        this.header = doc.createElement('h1');
        this.header.className = 'cart_title';
        this.header.innerHTML = "Cart";

        this.table = doc.createElement('table');
        this.table.className = 'cart_table';

        this.cart.appendChild(this.header)
        this.cart.appendChild(this.table);
        this.element.appendChild(this.cart);

        this.clear();
    }

    clear() {
        this.table.innerHTML = '';

        let tableHeader = this.doc.createElement('tr');
        tableHeader.innerHTML = '<th>Item</th><th>Quantity</th><th>Price</th>';

        this.table.appendChild(tableHeader);
    }
    
    addCartItem(foodItem) {
      let item = this.doc.createElement('tr');
      item.foodItem = foodItem;
      item.total = 1;

      let itemName = this.doc.createElement('td');
      itemName.innerHTML = foodItem.name;

      let itemCount = this.doc.createElement('td');
      itemCount.className = 'cart_count';

      let itemadd = this.doc.createElement('i');
      itemadd.className = 'fa fa-plus btn-icon';

      let itemtotal = this.doc.createElement('p');
      itemtotal.innerHTML = '1';

      let itemsub = this.doc.createElement('i');
      itemsub.className = 'fa fa-minus btn-icon';

      itemCount.appendChild(itemadd);
      itemCount.appendChild(itemtotal);
      itemCount.appendChild(itemsub);
      
      let itemCost = this.doc.createElement('td');
      itemCost.innerHTML = '$' + foodItem.price;

      itemsub.addEventListener('click', (event) => {
        let itemAmount = Number(itemtotal.innerHTML) 
        itemAmount -= 1;
        item.total = itemAmount;

        if (itemAmount == 0) {
          item.remove();
        }


        itemtotal.innerHTML = '' + itemAmount;
        itemCost.innerHTML = '$' + (item.foodItem.price * itemAmount);
      });

      itemadd.addEventListener('click', (event) => {
        let itemAmount = Number(itemtotal.innerHTML) 
        itemAmount += 1;
        item.total = itemAmount;
        itemtotal.innerHTML = '' + itemAmount;
        itemCost.innerHTML = '$' + (item.foodItem.price * itemAmount);
      });

      item.appendChild(itemName);
      item.appendChild(itemCount);
      item.appendChild(itemCost);
      this.table.appendChild(item);
    }
}