import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalTraineeApplicationsViewComponent } from './international-trainee-applications-view.component';

describe('InternationalTraineeApplicationsViewComponent', () => {
  let component: InternationalTraineeApplicationsViewComponent;
  let fixture: ComponentFixture<InternationalTraineeApplicationsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalTraineeApplicationsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalTraineeApplicationsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
