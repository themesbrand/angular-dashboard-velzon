import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitProgramViewComponent } from './submit-program-view.component';

describe('SubmitProgramViewComponent', () => {
  let component: SubmitProgramViewComponent;
  let fixture: ComponentFixture<SubmitProgramViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitProgramViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitProgramViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
