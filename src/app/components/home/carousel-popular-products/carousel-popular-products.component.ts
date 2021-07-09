import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import { MercadolibreService } from '../../../services/mercadolibre.service';
@Component({
    selector: 'app-carousel-popular-products',
    templateUrl: './carousel-popular-products.component.html',
    styleUrls: ['./carousel-popular-products.component.css']
})
export class CarouselPopularProductsComponent implements OnInit {
    @ViewChild('carousel') carousel: OwlCarousel;
    products = [];
    carouselOptions = {
        margin: 25,
        nav: false,
        navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        responsiveClass: true,
        autoWidth: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 0,
                loop: true
            },

            680: {
                items: 2,
                nav: false,
                loop: true
            },
            1024: {
                items: 3,
                nav: false,
                loop: true
            },
            1300: {
                items: 4,
                nav: false,
                loop: true,
                autoWidth: false,

            },
        }
    }
    constructor(private _mercadoLibreService: MercadolibreService) { }

    ngOnInit(): void {
        this.getProducts();
    }



    getProducts() {
        this._mercadoLibreService.getRandomProducts().subscribe(
            {
                next: (response) => {
                    if (response && response.results) {
                        this.products = response.results;
                    }
                },
                error: (error) => {
                    console.log('error', error);
                },
            }
        )
    }



}
