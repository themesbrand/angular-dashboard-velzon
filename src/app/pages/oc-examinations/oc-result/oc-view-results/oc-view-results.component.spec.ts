import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcViewResultsComponent } from './oc-view-results.component';

describe('OcViewResultsComponent', () => {
  let component: OcViewResultsComponent;
  let fixture: ComponentFixture<OcViewResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcViewResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcViewResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
