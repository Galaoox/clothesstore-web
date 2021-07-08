import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPopularProductsComponent } from './carousel-popular-products.component';

describe('CarouselPopularProductsComponent', () => {
  let component: CarouselPopularProductsComponent;
  let fixture: ComponentFixture<CarouselPopularProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselPopularProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPopularProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
