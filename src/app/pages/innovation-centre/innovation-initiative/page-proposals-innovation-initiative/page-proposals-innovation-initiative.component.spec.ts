import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProposalsInnovationInitiativeComponent } from './page-proposals-innovation-initiative.component';

describe('PageProposalsInnovationInitiativeComponent', () => {
  let component: PageProposalsInnovationInitiativeComponent;
  let fixture: ComponentFixture<PageProposalsInnovationInitiativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProposalsInnovationInitiativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProposalsInnovationInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
