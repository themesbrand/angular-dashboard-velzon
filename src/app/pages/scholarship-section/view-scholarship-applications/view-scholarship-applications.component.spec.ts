import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewScholarshipApplicationsComponent } from './view-scholarship-applications.component';

describe('ViewScholarshipApplicationsComponent', () => {
  let component: ViewScholarshipApplicationsComponent;
  let fixture: ComponentFixture<ViewScholarshipApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewScholarshipApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewScholarshipApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
