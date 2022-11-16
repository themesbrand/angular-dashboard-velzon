import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCurriculumRotationComponent } from './preview-rotation.component';

describe('PreviewRotationComponent', () => {
  let component: PreviewCurriculumRotationComponent;
  let fixture: ComponentFixture<PreviewCurriculumRotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewCurriculumRotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewCurriculumRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
