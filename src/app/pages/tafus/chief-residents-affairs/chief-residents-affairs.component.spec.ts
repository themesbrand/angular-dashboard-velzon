import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiefResidentsAffairsComponent } from './chief-residents-affairs.component';

describe('ChiefResidentsAffairsComponent', () => {
  let component: ChiefResidentsAffairsComponent;
  let fixture: ComponentFixture<ChiefResidentsAffairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiefResidentsAffairsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiefResidentsAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
