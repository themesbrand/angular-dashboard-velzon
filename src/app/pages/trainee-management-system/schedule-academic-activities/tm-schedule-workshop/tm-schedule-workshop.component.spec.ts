import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmScheduleWorkshopComponent } from './tm-schedule-workshop.component';

describe('TmScheduleWorkshopComponent', () => {
  let component: TmScheduleWorkshopComponent;
  let fixture: ComponentFixture<TmScheduleWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmScheduleWorkshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmScheduleWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
