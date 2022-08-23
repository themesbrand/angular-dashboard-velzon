import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationForInnovationInitiativeComponent } from './application-for-innovation-initiative.component';

describe('ApplicationForInnovationInitiativeComponent', () => {
  let component: ApplicationForInnovationInitiativeComponent;
  let fixture: ComponentFixture<ApplicationForInnovationInitiativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationForInnovationInitiativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationForInnovationInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
