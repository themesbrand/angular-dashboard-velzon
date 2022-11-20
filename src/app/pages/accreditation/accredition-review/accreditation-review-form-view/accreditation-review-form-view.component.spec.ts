import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditationReviewFormViewComponent } from './accreditation-review-form-view.component';

describe('AccreditationReviewFormViewComponent', () => {
  let component: AccreditationReviewFormViewComponent;
  let fixture: ComponentFixture<AccreditationReviewFormViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccreditationReviewFormViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditationReviewFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
