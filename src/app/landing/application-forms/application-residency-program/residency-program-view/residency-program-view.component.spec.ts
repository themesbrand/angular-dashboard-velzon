import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidencyProgramViewComponent } from './residency-program-view.component';

describe('ResidencyProgramViewComponent', () => {
  let component: ResidencyProgramViewComponent;
  let fixture: ComponentFixture<ResidencyProgramViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidencyProgramViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidencyProgramViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
