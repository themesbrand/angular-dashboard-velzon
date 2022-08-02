import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterruptionApplicationComponent } from './interruption-application.component';

describe('InterruptionApplicationComponent', () => {
  let component: InterruptionApplicationComponent;
  let fixture: ComponentFixture<InterruptionApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterruptionApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterruptionApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
