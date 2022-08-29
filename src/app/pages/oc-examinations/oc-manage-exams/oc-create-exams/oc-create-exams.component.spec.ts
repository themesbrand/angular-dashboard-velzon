import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcCreateExamsComponent } from './oc-create-exams.component';

describe('OcCreateExamsComponent', () => {
  let component: OcCreateExamsComponent;
  let fixture: ComponentFixture<OcCreateExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcCreateExamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcCreateExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
