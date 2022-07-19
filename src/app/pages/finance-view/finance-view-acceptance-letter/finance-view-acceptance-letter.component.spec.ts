import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceViewAcceptanceLetterComponent } from './finance-view-acceptance-letter.component';

describe('FinanceViewAcceptanceLetterComponent', () => {
  let component: FinanceViewAcceptanceLetterComponent;
  let fixture: ComponentFixture<FinanceViewAcceptanceLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceViewAcceptanceLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceViewAcceptanceLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
