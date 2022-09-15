import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualIncentivesComponent } from './annual-incentives.component';

describe('AnnualIncentivesComponent', () => {
  let component: AnnualIncentivesComponent;
  let fixture: ComponentFixture<AnnualIncentivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualIncentivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualIncentivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
