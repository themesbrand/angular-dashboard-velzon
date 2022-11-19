import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditionReviewComponent } from './accredition-review.component';

describe('AccreditionReviewComponent', () => {
  let component: AccreditionReviewComponent;
  let fixture: ComponentFixture<AccreditionReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccreditionReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditionReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
