import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsBox } from './items-box';

describe('ItemsBox', () => {
  let component: ItemsBox;
  let fixture: ComponentFixture<ItemsBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
