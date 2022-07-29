import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchConsultationRequestComponent } from './research-consultation-request.component';

describe('ResearchConsultationRequestComponent', () => {
  let component: ResearchConsultationRequestComponent;
  let fixture: ComponentFixture<ResearchConsultationRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchConsultationRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchConsultationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
