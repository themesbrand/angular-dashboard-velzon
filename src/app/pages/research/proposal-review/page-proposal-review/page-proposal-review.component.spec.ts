import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProposalReviewComponent } from './page-proposal-review.component';

describe('PageProposalReviewComponent', () => {
  let component: PageProposalReviewComponent;
  let fixture: ComponentFixture<PageProposalReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProposalReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProposalReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
