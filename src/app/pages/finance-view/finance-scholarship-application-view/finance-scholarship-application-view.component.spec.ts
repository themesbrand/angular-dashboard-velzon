import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceScholarshipApplicationViewComponent } from './finance-scholarship-application-view.component';

describe('FinanceScholarshipApplicationViewComponent', () => {
  let component: FinanceScholarshipApplicationViewComponent;
  let fixture: ComponentFixture<FinanceScholarshipApplicationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceScholarshipApplicationViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceScholarshipApplicationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
