import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBoothEvaluationComponent } from './section-booth-evaluation.component';

describe('SectionBoothEvaluationComponent', () => {
  let component: SectionBoothEvaluationComponent;
  let fixture: ComponentFixture<SectionBoothEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBoothEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBoothEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
