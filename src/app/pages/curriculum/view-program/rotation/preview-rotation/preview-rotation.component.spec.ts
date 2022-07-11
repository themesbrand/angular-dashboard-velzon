import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewRotationComponent } from './preview-rotation.component';

describe('PreviewRotationComponent', () => {
  let component: PreviewRotationComponent;
  let fixture: ComponentFixture<PreviewRotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewRotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
