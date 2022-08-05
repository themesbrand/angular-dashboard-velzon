import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FellowshipListViewComponent } from './fellowship-list-view.component';

describe('FellowshipListViewComponent', () => {
  let component: FellowshipListViewComponent;
  let fixture: ComponentFixture<FellowshipListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FellowshipListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FellowshipListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
