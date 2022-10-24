import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCvSectionFormComponent } from './view-cv-section-form.component';

describe('ViewCvSectionFormComponent', () => {
  let component: ViewCvSectionFormComponent;
  let fixture: ComponentFixture<ViewCvSectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCvSectionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCvSectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
