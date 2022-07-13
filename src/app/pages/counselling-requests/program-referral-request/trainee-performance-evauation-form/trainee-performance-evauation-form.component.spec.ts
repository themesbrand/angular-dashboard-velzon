import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineePerformanceEvauationFormComponent } from './trainee-performance-evauation-form.component';

describe('TraineePerformanceEvauationFormComponent', () => {
  let component: TraineePerformanceEvauationFormComponent;
  let fixture: ComponentFixture<TraineePerformanceEvauationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineePerformanceEvauationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineePerformanceEvauationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
