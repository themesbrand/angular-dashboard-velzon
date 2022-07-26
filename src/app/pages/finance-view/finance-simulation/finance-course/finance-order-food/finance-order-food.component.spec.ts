import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceOrderFoodComponent } from './finance-order-food.component';

describe('FinanceOrderFoodComponent', () => {
  let component: FinanceOrderFoodComponent;
  let fixture: ComponentFixture<FinanceOrderFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceOrderFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceOrderFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
