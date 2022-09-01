import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcImportResultsComponent } from './oc-import-results.component';

describe('OcImportResultsComponent', () => {
  let component: OcImportResultsComponent;
  let fixture: ComponentFixture<OcImportResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcImportResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcImportResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
