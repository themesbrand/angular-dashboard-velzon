import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageResearchEvaluationComponent } from './page-research-evaluation.component';

describe('PageResearchEvaluationComponent', () => {
  let component: PageResearchEvaluationComponent;
  let fixture: ComponentFixture<PageResearchEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageResearchEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageResearchEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
