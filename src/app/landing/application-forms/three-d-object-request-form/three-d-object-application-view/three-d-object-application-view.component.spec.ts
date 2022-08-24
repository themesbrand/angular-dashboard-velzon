import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDObjectApplicationViewComponent } from './three-d-object-application-view.component';

describe('ThreeDObjectApplicationViewComponent', () => {
  let component: ThreeDObjectApplicationViewComponent;
  let fixture: ComponentFixture<ThreeDObjectApplicationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDObjectApplicationViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDObjectApplicationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
