import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchDayRegistrationComponent } from './research-day-registration.component';

describe('ResearchDayRegistrationComponent', () => {
  let component: ResearchDayRegistrationComponent;
  let fixture: ComponentFixture<ResearchDayRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchDayRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchDayRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
