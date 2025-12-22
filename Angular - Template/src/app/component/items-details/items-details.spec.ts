import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsDetails } from './items-details';

describe('ItemsDetails', () => {
  let component: ItemsDetails;
  let fixture: ComponentFixture<ItemsDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
