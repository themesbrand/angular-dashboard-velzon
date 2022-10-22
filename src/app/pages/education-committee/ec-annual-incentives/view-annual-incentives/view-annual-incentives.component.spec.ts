import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAnnualIncentivesComponent } from './view-annual-incentives.component';

describe('ViewAnnualIncentivesComponent', () => {
  let component: ViewAnnualIncentivesComponent;
  let fixture: ComponentFixture<ViewAnnualIncentivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAnnualIncentivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAnnualIncentivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
