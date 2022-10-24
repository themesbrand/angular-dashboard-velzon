import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduationListsComponent } from './graduation-lists.component';

describe('GraduationListsComponent', () => {
  let component: GraduationListsComponent;
  let fixture: ComponentFixture<GraduationListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduationListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduationListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
