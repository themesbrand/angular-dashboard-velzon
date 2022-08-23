import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationInitiativeComponent } from './innovation-initiative.component';

describe('InnovationInitiativeComponent', () => {
  let component: InnovationInitiativeComponent;
  let fixture: ComponentFixture<InnovationInitiativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationInitiativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
