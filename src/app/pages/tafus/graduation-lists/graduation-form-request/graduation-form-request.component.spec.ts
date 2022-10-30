import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduationFormRequestComponent } from './graduation-form-request.component';

describe('GraduationFormRequestComponent', () => {
  let component: GraduationFormRequestComponent;
  let fixture: ComponentFixture<GraduationFormRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduationFormRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduationFormRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
