import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementaryTrainingComponent } from './supplementary-training.component';

describe('SupplementaryTrainingComponent', () => {
  let component: SupplementaryTrainingComponent;
  let fixture: ComponentFixture<SupplementaryTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplementaryTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplementaryTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
