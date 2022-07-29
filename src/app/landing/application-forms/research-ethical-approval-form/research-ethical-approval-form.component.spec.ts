import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchEthicalApprovalFormComponent } from './research-ethical-approval-form.component';

describe('ResearchEthicalApprovalFormComponent', () => {
  let component: ResearchEthicalApprovalFormComponent;
  let fixture: ComponentFixture<ResearchEthicalApprovalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchEthicalApprovalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchEthicalApprovalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
