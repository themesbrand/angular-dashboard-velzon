import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationForScholarshipComponent } from './application-for-scholarship.component';

describe('ApplicationForScholarshipComponent', () => {
  let component: ApplicationForScholarshipComponent;
  let fixture: ComponentFixture<ApplicationForScholarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationForScholarshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationForScholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
