import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchEthicalApprovalComponent } from './research-ethical-approval.component';

describe('ResearchEthicalApprovalComponent', () => {
  let component: ResearchEthicalApprovalComponent;
  let fixture: ComponentFixture<ResearchEthicalApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchEthicalApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchEthicalApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
