import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChiefResidentsComponent } from './view-chief-residents.component';

describe('ViewChiefResidentsComponent', () => {
  let component: ViewChiefResidentsComponent;
  let fixture: ComponentFixture<ViewChiefResidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChiefResidentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChiefResidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
