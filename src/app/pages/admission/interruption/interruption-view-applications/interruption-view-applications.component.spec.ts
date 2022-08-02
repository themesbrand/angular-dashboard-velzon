import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterruptionViewApplicationsComponent } from './interruption-view-applications.component';

describe('InterruptionViewApplicationsComponent', () => {
  let component: InterruptionViewApplicationsComponent;
  let fixture: ComponentFixture<InterruptionViewApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterruptionViewApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterruptionViewApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
