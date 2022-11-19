import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeManagementSystemComponent } from './trainee-management-system.component';

describe('TraineeManagementSystemComponent', () => {
  let component: TraineeManagementSystemComponent;
  let fixture: ComponentFixture<TraineeManagementSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeManagementSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
