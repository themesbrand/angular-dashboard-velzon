import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchDayComponent } from './research-day.component';

describe('ResearchDayComponent', () => {
  let component: ResearchDayComponent;
  let fixture: ComponentFixture<ResearchDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
