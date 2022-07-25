import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMedicalBookRequestsComponent } from './view-medical-book-requests.component';

describe('ViewMedicalBookRequestsComponent', () => {
  let component: ViewMedicalBookRequestsComponent;
  let fixture: ComponentFixture<ViewMedicalBookRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMedicalBookRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMedicalBookRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
