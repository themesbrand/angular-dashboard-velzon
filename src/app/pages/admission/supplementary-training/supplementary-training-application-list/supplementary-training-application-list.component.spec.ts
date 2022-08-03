import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementaryTrainingApplicationListComponent } from './supplementary-training-application-list.component';

describe('SupplementaryTrainingApplicationListComponent', () => {
  let component: SupplementaryTrainingApplicationListComponent;
  let fixture: ComponentFixture<SupplementaryTrainingApplicationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplementaryTrainingApplicationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplementaryTrainingApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
