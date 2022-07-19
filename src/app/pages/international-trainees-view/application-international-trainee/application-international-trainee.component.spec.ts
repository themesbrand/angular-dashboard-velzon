import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationInternationalTraineeComponent } from './application-international-trainee.component';

describe('ApplicationInternationalTraineeComponent', () => {
  let component: ApplicationInternationalTraineeComponent;
  let fixture: ComponentFixture<ApplicationInternationalTraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationInternationalTraineeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationInternationalTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
