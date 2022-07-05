import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProgramsTwoComponent } from './view-programs-two.component';

describe('ViewProgramsTwoComponent', () => {
  let component: ViewProgramsTwoComponent;
  let fixture: ComponentFixture<ViewProgramsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProgramsTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProgramsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
