import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExamsCreateExamComponent } from './manage-exams-create-exam.component';

describe('ManageExamsCreateExamComponent', () => {
  let component: ManageExamsCreateExamComponent;
  let fixture: ComponentFixture<ManageExamsCreateExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageExamsCreateExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageExamsCreateExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
