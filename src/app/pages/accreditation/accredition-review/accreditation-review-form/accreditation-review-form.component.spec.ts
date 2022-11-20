import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditationReviewFormComponent } from './accreditation-review-form.component';

describe('AccreditationReviewFormComponent', () => {
  let component: AccreditationReviewFormComponent;
  let fixture: ComponentFixture<AccreditationReviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccreditationReviewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditationReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
