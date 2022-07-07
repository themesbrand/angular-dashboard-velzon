import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSitesComponent } from './training-sites.component';

describe('TrainingSitesComponent', () => {
  let component: TrainingSitesComponent;
  let fixture: ComponentFixture<TrainingSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingSitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
