import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoopingCart } from './shooping-cart';

describe('ShoopingCart', () => {
  let component: ShoopingCart;
  let fixture: ComponentFixture<ShoopingCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoopingCart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoopingCart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
