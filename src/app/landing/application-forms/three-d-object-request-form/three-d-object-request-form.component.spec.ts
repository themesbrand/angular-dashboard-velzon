import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDObjectRequestFormComponent } from './three-d-object-request-form.component';

describe('ThreeDObjectRequestFormComponent', () => {
  let component: ThreeDObjectRequestFormComponent;
  let fixture: ComponentFixture<ThreeDObjectRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDObjectRequestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDObjectRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
