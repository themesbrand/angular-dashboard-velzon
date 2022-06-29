import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByFacultyComponent } from './by-faculty.component';

describe('ByFacultyComponent', () => {
  let component: ByFacultyComponent;
  let fixture: ComponentFixture<ByFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByFacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
