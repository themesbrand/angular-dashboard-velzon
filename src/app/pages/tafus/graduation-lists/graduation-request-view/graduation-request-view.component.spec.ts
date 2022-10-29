import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduationRequestViewComponent } from './graduation-request-view.component';

describe('GraduationRequestViewComponent', () => {
  let component: GraduationRequestViewComponent;
  let fixture: ComponentFixture<GraduationRequestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduationRequestViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduationRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
