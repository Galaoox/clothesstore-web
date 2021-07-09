import { Component, OnInit } from '@angular/core';
import { MercadolibreService } from '../../../services/mercadolibre.service';

@Component({
    selector: 'app-carousel-popular-products',
    templateUrl: './carousel-popular-products.component.html',
    styleUrls: ['./carousel-popular-products.component.css']
})
export class CarouselPopularProductsComponent implements OnInit {
    products = [];

    constructor(private _mercadoLibreService: MercadolibreService) { }

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts() {
        this._mercadoLibreService.getRandomProducts().subscribe(
            {
                next: (response) => {
                    if (response && response.results) {
                        for (let index = 0; index < 4; index++) {
                            this.products.push(response.results[Math.floor(Math.random() * response.results.length)])
                        }
                    }
                },
                error: (error) => {
                    console.log('error', error);
                },
            }
        )
    }



}
