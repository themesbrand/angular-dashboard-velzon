import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByRotationComponent } from './by-rotation.component';

describe('ByRotationComponent', () => {
  let component: ByRotationComponent;
  let fixture: ComponentFixture<ByRotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByRotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
