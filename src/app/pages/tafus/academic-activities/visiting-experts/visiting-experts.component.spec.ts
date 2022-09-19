import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitingExpertsComponent } from './visiting-experts.component';

describe('VisitingExpertsComponent', () => {
  let component: VisitingExpertsComponent;
  let fixture: ComponentFixture<VisitingExpertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitingExpertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitingExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
