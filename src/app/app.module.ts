import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CarouselBannersComponent } from './components/home/carousel-banners/carousel-banners.component';
import { InfoSectionComponent } from './components/home/info-section/info-section.component';
import { CarouselPopularProductsComponent } from './components/home/carousel-popular-products/carousel-popular-products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CarouselBannersComponent,
    InfoSectionComponent,
    CarouselPopularProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
