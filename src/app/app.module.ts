import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        HomeComponent,
        CarouselBannersComponent,
        InfoSectionComponent,
        CarouselPopularProductsComponent,
        CardProductComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        OwlModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
