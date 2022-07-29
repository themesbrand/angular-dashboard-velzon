import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionGroupingComponent } from './competition-grouping.component';

describe('CompetitionGroupingComponent', () => {
  let component: CompetitionGroupingComponent;
  let fixture: ComponentFixture<CompetitionGroupingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionGroupingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
