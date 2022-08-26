import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInterimReportComponent } from './page-interim-report.component';

describe('PageInterimReportComponent', () => {
  let component: PageInterimReportComponent;
  let fixture: ComponentFixture<PageInterimReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageInterimReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInterimReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
