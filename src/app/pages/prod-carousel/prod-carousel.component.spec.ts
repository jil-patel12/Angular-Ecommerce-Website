import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdCarouselComponent } from './prod-carousel.component';

describe('ProdCarouselComponent', () => {
  let component: ProdCarouselComponent;
  let fixture: ComponentFixture<ProdCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
