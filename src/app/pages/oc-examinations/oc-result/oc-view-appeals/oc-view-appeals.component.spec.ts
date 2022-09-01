import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcViewAppealsComponent } from './oc-view-appeals.component';

describe('OcViewAppealsComponent', () => {
  let component: OcViewAppealsComponent;
  let fixture: ComponentFixture<OcViewAppealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcViewAppealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcViewAppealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
