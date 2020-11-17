import { Component } from './component.js';

export class PolicyNavCP extends Component {
    constructor(doc) {
        super(doc);

        this.element = doc.createElement('div');
        this.element.className = 'sidebar-category';
        this.list = doc.createElement('ul');
        this.policy = doc.createElement('button');
        this.policy.className = 'btn policy_button';
        this.cashOnly = doc.createElement('div');
        this.policy.createElement ='myfunction';
        this.policy.innerHTML = '<p>Policy</p>';
        this.cashOnly.innerHTML = '<i></i><p>Cash Only</p>';

        this.policy.addEventListener('click', () => {
            doc.getElementById('policy').style.display = 'block';
        });

        this.list.appendChild(this.policy);
        this.list.appendChild(this.cashOnly);
        this.element.appendChild(this.list);

    }
}