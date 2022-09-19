import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVisitingExpertsComponent } from './create-visiting-experts.component';

describe('CreateVisitingExpertsComponent', () => {
  let component: CreateVisitingExpertsComponent;
  let fixture: ComponentFixture<CreateVisitingExpertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVisitingExpertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVisitingExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
