import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchFundingOpportunitiesFormComponent } from './research-funding-opportunities-form.component';

describe('ResearchFundingOpportunitiesFormComponent', () => {
  let component: ResearchFundingOpportunitiesFormComponent;
  let fixture: ComponentFixture<ResearchFundingOpportunitiesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchFundingOpportunitiesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchFundingOpportunitiesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
