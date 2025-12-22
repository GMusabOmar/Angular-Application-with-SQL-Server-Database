import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsBoxForItemsPage } from './items-box-for-items-page';

describe('ItemsBoxForItemsPage', () => {
  let component: ItemsBoxForItemsPage;
  let fixture: ComponentFixture<ItemsBoxForItemsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsBoxForItemsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsBoxForItemsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
