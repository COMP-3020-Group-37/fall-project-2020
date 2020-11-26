import { Component } from './component.js';

export class PolicyNavCP extends Component {
    constructor(doc) {
        super(doc);

        this.element = doc.createElement('div');
        this.element.className = 'sidebar-category';
        this.list = doc.createElement('ul');

        this.listItem1 = doc.createElement('li');
        this.policy = doc.createElement('button');
        this.policy.style.width = '100%'
        this.policy.className = 'btn';
        this.policy.innerHTML = '<p>Policy</p>';


        this.listItem2 = doc.createElement('li');
        this.listItem2.innerHTML = 'We accept cash only'

        this.policy.addEventListener('click', () => {
            doc.getElementById('policy').style.display = 'block';
        });

        this.listItem1.appendChild(this.policy);
        this.list.appendChild(this.listItem1);
        this.list.appendChild(this.listItem2);
        this.element.appendChild(this.list);

    }
}