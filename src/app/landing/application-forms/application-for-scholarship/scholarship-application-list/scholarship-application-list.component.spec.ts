import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipApplicationListComponent } from './scholarship-application-list.component';

describe('ScholarshipApplicationListComponent', () => {
  let component: ScholarshipApplicationListComponent;
  let fixture: ComponentFixture<ScholarshipApplicationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScholarshipApplicationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarshipApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
