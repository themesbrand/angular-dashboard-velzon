import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDObjectApplicationFormComponent } from './three-d-object-application-form.component';

describe('ThreeDObjectApplicationFormComponent', () => {
  let component: ThreeDObjectApplicationFormComponent;
  let fixture: ComponentFixture<ThreeDObjectApplicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDObjectApplicationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDObjectApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
