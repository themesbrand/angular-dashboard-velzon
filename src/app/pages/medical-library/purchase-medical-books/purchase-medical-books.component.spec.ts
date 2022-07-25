import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseMedicalBooksComponent } from './purchase-medical-books.component';

describe('PurchaseMedicalBooksComponent', () => {
  let component: PurchaseMedicalBooksComponent;
  let fixture: ComponentFixture<PurchaseMedicalBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseMedicalBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseMedicalBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
