import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSurgicalScoreComponent } from './view-surgical-score.component';

describe('ViewSurgicalScoreComponent', () => {
  let component: ViewSurgicalScoreComponent;
  let fixture: ComponentFixture<ViewSurgicalScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSurgicalScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSurgicalScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
