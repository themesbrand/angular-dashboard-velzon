import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationFacilitiesUploadInvoiceComponent } from './simulation-facilities-upload-invoice.component';

describe('SimulationFacilitiesUploadInvoiceComponent', () => {
  let component: SimulationFacilitiesUploadInvoiceComponent;
  let fixture: ComponentFixture<SimulationFacilitiesUploadInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationFacilitiesUploadInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationFacilitiesUploadInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
