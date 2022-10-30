import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduationFormRequestViewComponent } from './graduation-form-request-view.component';

describe('GraduationFormRequestViewComponent', () => {
  let component: GraduationFormRequestViewComponent;
  let fixture: ComponentFixture<GraduationFormRequestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduationFormRequestViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduationFormRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
