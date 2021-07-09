import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-carousel-popular-products',
    templateUrl: './carousel-popular-products.component.html',
    styleUrls: ['./carousel-popular-products.component.css']
})
export class CarouselPopularProductsComponent implements OnInit {
    products = new Array(4);

    constructor() { }

    ngOnInit(): void {
    }

}
