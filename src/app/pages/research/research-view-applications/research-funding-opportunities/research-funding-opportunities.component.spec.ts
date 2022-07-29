import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchFundingOpportunitiesComponent } from './research-funding-opportunities.component';

describe('ResearchFundingOpportunitiesComponent', () => {
  let component: ResearchFundingOpportunitiesComponent;
  let fixture: ComponentFixture<ResearchFundingOpportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchFundingOpportunitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchFundingOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
