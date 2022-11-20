import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditReportTemplateComponent } from './accredit-report-template.component';

describe('AccreditReportTemplateComponent', () => {
  let component: AccreditReportTemplateComponent;
  let fixture: ComponentFixture<AccreditReportTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccreditReportTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditReportTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
