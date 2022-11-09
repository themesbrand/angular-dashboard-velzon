import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaionAnalysisComponent } from './rotaion-analysis.component';

describe('RotaionAnalysisComponent', () => {
  let component: RotaionAnalysisComponent;
  let fixture: ComponentFixture<RotaionAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotaionAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotaionAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
