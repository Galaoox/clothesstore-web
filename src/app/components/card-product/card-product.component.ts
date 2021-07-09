import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-card-product',
    templateUrl: './card-product.component.html',
    styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
    @Input() price: string;
    @Input() title: string;
    @Input() id: string;
    @Input() img: string;

    constructor() { }

    ngOnInit(): void {
    }


    replaceComma(value) {
        return value.replace(/,/g, '.')
    }

    showDiscount() {
        return this.title.length % 2 == 0;
    }

}
