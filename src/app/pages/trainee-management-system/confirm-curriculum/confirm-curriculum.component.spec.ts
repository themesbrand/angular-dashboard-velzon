import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCurriculumComponent } from './confirm-curriculum.component';

describe('ConfirmCurriculumComponent', () => {
  let component: ConfirmCurriculumComponent;
  let fixture: ComponentFixture<ConfirmCurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmCurriculumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
