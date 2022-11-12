import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProgramTrainingSitesComponent } from './new-program-training-sites.component';

describe('NewProgramTrainingSitesComponent', () => {
  let component: NewProgramTrainingSitesComponent;
  let fixture: ComponentFixture<NewProgramTrainingSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProgramTrainingSitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProgramTrainingSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
