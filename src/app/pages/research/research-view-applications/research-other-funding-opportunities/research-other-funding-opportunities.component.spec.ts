import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchOtherFundingOpportunitiesComponent } from './research-other-funding-opportunities.component';

describe('ResearchOtherFundingOpportunitiesComponent', () => {
  let component: ResearchOtherFundingOpportunitiesComponent;
  let fixture: ComponentFixture<ResearchOtherFundingOpportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchOtherFundingOpportunitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchOtherFundingOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
