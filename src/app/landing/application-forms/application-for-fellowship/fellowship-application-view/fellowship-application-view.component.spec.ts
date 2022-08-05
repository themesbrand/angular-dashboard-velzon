import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FellowshipApplicationViewComponent } from './fellowship-application-view.component';

describe('FellowshipApplicationViewComponent', () => {
  let component: FellowshipApplicationViewComponent;
  let fixture: ComponentFixture<FellowshipApplicationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FellowshipApplicationViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FellowshipApplicationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
