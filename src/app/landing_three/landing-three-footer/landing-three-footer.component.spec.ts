import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingThreeFooterComponent } from './landing-three-footer.component';

describe('LandingThreeFooterComponent', () => {
  let component: LandingThreeFooterComponent;
  let fixture: ComponentFixture<LandingThreeFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingThreeFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingThreeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
