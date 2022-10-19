import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcAnnualIncentivesComponent } from './ec-annual-incentives.component';

describe('EcAnnualIncentivesComponent', () => {
  let component: EcAnnualIncentivesComponent;
  let fixture: ComponentFixture<EcAnnualIncentivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcAnnualIncentivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcAnnualIncentivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
