import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicActivityRequestsComponent } from './academic-activity-requests.component';

describe('AcademicActivityRequestsComponent', () => {
  let component: AcademicActivityRequestsComponent;
  let fixture: ComponentFixture<AcademicActivityRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicActivityRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicActivityRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
