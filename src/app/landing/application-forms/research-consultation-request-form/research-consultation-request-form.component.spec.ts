import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchConsultationRequestFormComponent } from './research-consultation-request-form.component';

describe('ResearchConsultationRequestFormComponent', () => {
  let component: ResearchConsultationRequestFormComponent;
  let fixture: ComponentFixture<ResearchConsultationRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchConsultationRequestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchConsultationRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
