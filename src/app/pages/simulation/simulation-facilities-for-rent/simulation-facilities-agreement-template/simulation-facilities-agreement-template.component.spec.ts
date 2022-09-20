import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationFacilitiesAgreementTemplateComponent } from './simulation-facilities-agreement-template.component';

describe('SimulationFacilitiesAgreementTemplateComponent', () => {
  let component: SimulationFacilitiesAgreementTemplateComponent;
  let fixture: ComponentFixture<SimulationFacilitiesAgreementTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationFacilitiesAgreementTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationFacilitiesAgreementTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
