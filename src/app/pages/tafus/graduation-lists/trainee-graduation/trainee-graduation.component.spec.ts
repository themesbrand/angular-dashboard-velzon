import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeGraduationComponent } from './trainee-graduation.component';

describe('TraineeGraduationComponent', () => {
  let component: TraineeGraduationComponent;
  let fixture: ComponentFixture<TraineeGraduationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeGraduationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeGraduationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
