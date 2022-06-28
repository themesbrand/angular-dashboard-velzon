import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotationPageResidentMappingComponent } from './rotation-page-resident-mapping.component';

describe('RotationPageResidentMappingComponent', () => {
  let component: RotationPageResidentMappingComponent;
  let fixture: ComponentFixture<RotationPageResidentMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotationPageResidentMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotationPageResidentMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
