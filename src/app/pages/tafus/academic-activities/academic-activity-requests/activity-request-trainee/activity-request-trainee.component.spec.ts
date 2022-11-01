import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityRequestTraineeComponent } from './activity-request-trainee.component';

describe('ActivityRequestTraineeComponent', () => {
  let component: ActivityRequestTraineeComponent;
  let fixture: ComponentFixture<ActivityRequestTraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityRequestTraineeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityRequestTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
