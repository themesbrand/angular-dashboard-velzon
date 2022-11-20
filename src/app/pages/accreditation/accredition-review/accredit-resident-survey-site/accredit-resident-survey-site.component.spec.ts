import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditResidentSurveySiteComponent } from './accredit-resident-survey-site.component';

describe('AccreditResidentSurveySiteComponent', () => {
  let component: AccreditResidentSurveySiteComponent;
  let fixture: ComponentFixture<AccreditResidentSurveySiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccreditResidentSurveySiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditResidentSurveySiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
