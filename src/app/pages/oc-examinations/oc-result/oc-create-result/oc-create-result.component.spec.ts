import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcCreateResultComponent } from './oc-create-result.component';

describe('OcCreateResultComponent', () => {
  let component: OcCreateResultComponent;
  let fixture: ComponentFixture<OcCreateResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcCreateResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcCreateResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
