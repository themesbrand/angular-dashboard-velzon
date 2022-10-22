import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnnualIncentivesComponent } from './add-annual-incentives.component';

describe('AddAnnualIncentivesComponent', () => {
  let component: AddAnnualIncentivesComponent;
  let fixture: ComponentFixture<AddAnnualIncentivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnnualIncentivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnnualIncentivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
