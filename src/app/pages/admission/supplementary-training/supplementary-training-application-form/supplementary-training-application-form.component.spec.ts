import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementaryTrainingApplicationFormComponent } from './supplementary-training-application-form.component';

describe('SupplementaryTrainingApplicationFormComponent', () => {
  let component: SupplementaryTrainingApplicationFormComponent;
  let fixture: ComponentFixture<SupplementaryTrainingApplicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplementaryTrainingApplicationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplementaryTrainingApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
