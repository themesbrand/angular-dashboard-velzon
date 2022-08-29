import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcPageExamsComponent } from './oc-page-exams.component';

describe('OcPageExamsComponent', () => {
  let component: OcPageExamsComponent;
  let fixture: ComponentFixture<OcPageExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcPageExamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcPageExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
