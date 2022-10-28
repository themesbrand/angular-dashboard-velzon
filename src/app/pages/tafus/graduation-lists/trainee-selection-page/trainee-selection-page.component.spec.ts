import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeSelectionPageComponent } from './trainee-selection-page.component';

describe('TraineeSelectionPageComponent', () => {
  let component: TraineeSelectionPageComponent;
  let fixture: ComponentFixture<TraineeSelectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeSelectionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeSelectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
