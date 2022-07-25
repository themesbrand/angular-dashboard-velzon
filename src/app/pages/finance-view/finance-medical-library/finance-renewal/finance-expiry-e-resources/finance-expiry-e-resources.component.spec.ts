import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceExpiryEResourcesComponent } from './finance-expiry-e-resources.component';

describe('FinanceExpiryEResourcesComponent', () => {
  let component: FinanceExpiryEResourcesComponent;
  let fixture: ComponentFixture<FinanceExpiryEResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceExpiryEResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceExpiryEResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
