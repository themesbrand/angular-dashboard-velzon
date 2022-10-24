import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSectionFormComponent } from './cv-section-form.component';

describe('CvSectionFormComponent', () => {
  let component: CvSectionFormComponent;
  let fixture: ComponentFixture<CvSectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvSectionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvSectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
