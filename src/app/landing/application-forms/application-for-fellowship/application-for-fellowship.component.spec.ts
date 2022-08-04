import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationForFellowshipComponent } from './application-for-fellowship.component';

describe('ApplicationForFellowshipComponent', () => {
  let component: ApplicationForFellowshipComponent;
  let fixture: ComponentFixture<ApplicationForFellowshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationForFellowshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationForFellowshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
