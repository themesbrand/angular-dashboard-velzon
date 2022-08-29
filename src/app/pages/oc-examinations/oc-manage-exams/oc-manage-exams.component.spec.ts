import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcManageExamsComponent } from './oc-manage-exams.component';

describe('OcManageExamsComponent', () => {
  let component: OcManageExamsComponent;
  let fixture: ComponentFixture<OcManageExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcManageExamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcManageExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
