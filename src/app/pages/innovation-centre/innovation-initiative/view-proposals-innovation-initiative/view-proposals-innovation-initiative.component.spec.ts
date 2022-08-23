import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProposalsInnovationInitiativeComponent } from './view-proposals-innovation-initiative.component';

describe('ViewProposalsInnovationInitiativeComponent', () => {
  let component: ViewProposalsInnovationInitiativeComponent;
  let fixture: ComponentFixture<ViewProposalsInnovationInitiativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProposalsInnovationInitiativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProposalsInnovationInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
