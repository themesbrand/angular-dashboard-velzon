import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByTraineeComponent } from './by-trainee.component';

describe('ByTraineeComponent', () => {
  let component: ByTraineeComponent;
  let fixture: ComponentFixture<ByTraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByTraineeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
