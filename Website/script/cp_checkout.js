import { Component } from './component.js';

export class CheckoutCP extends Component {
    constructor(wd, doc, db) {
        super(doc);
        this.wd = wd;
        this.db = db;
        
        this.element = doc.createElement('button');
        this.element.className = 'addMore_checkout btn';
        this.element.innerHTML = 'Add more items';

        this.element2 = doc.createElement('div');
        this.element2.className = 'checkout_grid';

        this.table = doc.createElement('div');
        this.table.className = 'final_cart_table';
        this.clear();

        this.yourTotal = doc.createElement('h2');
        this.yourTotal.className = 'your-total';

        this.yourAddress = doc.createElement('div');
        this.yourAddress.className = 'EnterCheckOut';
        this.yourAddress.innerHTML = 'Your Address: <input type="text" id="input-address" name="location">';

        this.yourPhone = doc.createElement('div');
        this.yourPhone.className = 'EnterCheckOut';
        this.yourPhone.innerHTML = 'Phone #: <input type="text" id="input-phone" name="location">';

        this.placeOrder = doc.createElement('button');
        this.placeOrder.className = 'placeOrder btn';
        this.placeOrder.innerHTML = 'Place Order';

        this.element2.appendChild(this.table);
        this.element2.appendChild(this.yourTotal);
        this.element2.appendChild(this.yourAddress);
        this.element2.appendChild(this.yourPhone);
        this.element2.appendChild(this.placeOrder);
    }

    clear() {
        this.table.innerHTML = '<div class ="final_cart_title">Item</div>' +
                               '<div class ="final_cart_title">Quantity</div>' +
                               '<div class ="final_cart_title">Price</div>';
    }

    setTotal(amount) {
        this.yourTotal.innerHTML = 'Total: $' + amount + ".00";
    }

    addFoodItem(foodItem, amount) {
        let itemName = foodItem.name;
        let itemPrice = foodItem.price;
        let itemTotalPrice = itemPrice * amount;

        let nameElement = this.doc.createElement('div');
        nameElement.style.textAlign = "left";
        nameElement.style.paddingLeft = "20px";
        nameElement.innerHTML = itemName;

        let amountElement = this.doc.createElement('div');
        amountElement.innerHTML = amount;

        let totalPriceElement = this.doc.createElement('div');
        totalPriceElement.innerHTML = '$' + itemTotalPrice + ".00";

        this.table.appendChild(nameElement);
        this.table.appendChild(amountElement);
        this.table.appendChild(totalPriceElement);
    }
}