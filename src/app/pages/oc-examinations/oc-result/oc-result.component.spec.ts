import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcResultComponent } from './oc-result.component';

describe('OcResultComponent', () => {
  let component: OcResultComponent;
  let fixture: ComponentFixture<OcResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
