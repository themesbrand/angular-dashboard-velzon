import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominateChiefResidentsComponent } from './nominate-chief-residents.component';

describe('NominateChiefResidentsComponent', () => {
  let component: NominateChiefResidentsComponent;
  let fixture: ComponentFixture<NominateChiefResidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominateChiefResidentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominateChiefResidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
