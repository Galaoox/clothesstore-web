import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CarouselBannersComponent } from './components/home/carousel-banners/carousel-banners.component';
import { InfoSectionComponent } from './components/home/info-section/info-section.component';
import { CarouselPopularProductsComponent } from './components/home/carousel-popular-products/carousel-popular-products.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { OwlModule } from 'ngx-owl-carousel';
import { ListProductsComponent } from './pages/list-products/list-products.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        HomeComponent,
        CarouselBannersComponent,
        InfoSectionComponent,
        CarouselPopularProductsComponent,
        CardProductComponent,
        ListProductsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        OwlModule,
        FormsModule, ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
