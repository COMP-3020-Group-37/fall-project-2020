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
    }

    clear() {
        this.table.innerHTML = '';

        let tableHeader = this.doc.createElement('tr');
        tableHeader.innerHTML = '<th>Item</th><th>Quantity</th><th>Price</th>';

        this.table.appendChild(tableHeader);
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