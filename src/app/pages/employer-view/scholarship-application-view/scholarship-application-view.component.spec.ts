import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipApplicationViewComponent } from './scholarship-application-view.component';

describe('ScholarshipApplicationViewComponent', () => {
  let component: ScholarshipApplicationViewComponent;
  let fixture: ComponentFixture<ScholarshipApplicationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScholarshipApplicationViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarshipApplicationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
