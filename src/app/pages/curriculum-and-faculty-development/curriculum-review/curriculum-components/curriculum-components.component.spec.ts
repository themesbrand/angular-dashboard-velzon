import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumComponentsComponent } from './curriculum-components.component';

describe('CurriculumComponentsComponent', () => {
  let component: CurriculumComponentsComponent;
  let fixture: ComponentFixture<CurriculumComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
