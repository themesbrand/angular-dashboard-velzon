import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcAppealResponseFormComponent } from './oc-appeal-response-form.component';

describe('OcAppealResponseFormComponent', () => {
  let component: OcAppealResponseFormComponent;
  let fixture: ComponentFixture<OcAppealResponseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcAppealResponseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcAppealResponseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
