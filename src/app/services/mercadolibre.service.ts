import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MercadolibreService {
    private url = environment.api;

    public headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'Authorization' : 'Bearer ' + this.token
    });

    private path = 'sites/MCO/search';
    private idCategory = 'MCO1430';

    constructor(private http: HttpClient) { }

    getRandomProducts(): Observable<any> {
        return this.http.get<any>(this.url + this.path, {
            params: {
                category: this.idCategory,
                limit: this.random(4, 20),
                offset: this.random(1, 40)
            },
            headers: this.headers,
        });
    }

    findProduct(search: string): Observable<any> {
        return this.http.get<any>(this.url + this.path, {
            params: {
                category: this.idCategory,
                q: search
            },
            headers: this.headers,
        });
    }

    random(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min).toString();
    }
}
