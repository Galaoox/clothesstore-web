import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MercadolibreService } from '../../services/mercadolibre.service';

@Component({
    selector: 'app-list-products',
    templateUrl: './list-products.component.html',
    styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
    products = [];
    constructor(private route: ActivatedRoute, private _mercadoLibreService: MercadolibreService) { }

    ngOnInit(): void {
        this.listenChangesParams();
    }

    listenChangesParams() {
        this.route.queryParams
            .subscribe(params => {
                this._mercadoLibreService.findProduct(params.search).subscribe(
                    {
                        next: (response) => {
                            if (response && response.results) {
                                this.products = response.results;
                            }

                        },
                        error: (error) => {
                            console.log('error', error);
                            this.products = [];
                        },
                    }
                )
            });
    }



}
