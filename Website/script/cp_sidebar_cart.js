import { Component } from './component.js';

export class SideBarCartCP extends Component {
    constructor(doc) {
        super(doc);

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
        this.addCartItem();
        this.addCartItem();
        this.addCartItem();
        this.addCartItem();
        this.addCartItem();
        this.addCartItem();
    }

    clear() {
        this.table.innerHTML = '';

        let tableHeader = this.doc.createElement('tr');
        tableHeader.innerHTML = '<th>Item</th><th>Quantity</th><th>Price</th>';

        this.table.appendChild(tableHeader);
    }

    addCartItem() {
      let item = this.doc.createElement('tr');

      let itemName = this.doc.createElement('td');
      itemName.innerHTML = 'item 1';

      let itemCount = this.doc.createElement('td');

      let itemsub = this.doc.createElement('button');
      itemsub.className = 'add_remove_item';
      itemsub.innerHTML = '-';

      let itemtotal = this.doc.createElement('p');
      itemtotal.innerHTML = '1';

      let itemadd = this.doc.createElement('button');
      itemadd.className = 'add_remove_item';
      itemadd.innerHTML = '+';

      itemCount.appendChild(itemadd);
      itemCount.appendChild(itemtotal);
      itemCount.appendChild(itemsub);
      
      let itemCost = this.doc.createElement('td');
      itemCost.innerHTML = '$1.00';

      item.appendChild(itemName);
      item.appendChild(itemCount);
      item.appendChild(itemCost);
      this.table.appendChild(item);
    }
}

{/* <div class="cart">
        <h1 class="cart_title">CART</h1>
        <table class="cart_table">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>item 1</td>
            <td>
              <button class="add_remove_item">- </button>
              1
              <button class="add_remove_item"> +</button></td>
            <td>$ 3</td>
          </tr>
        </table>
      </div> */}