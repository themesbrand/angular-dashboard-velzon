import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationInitiativeViewComponent } from './innovation-initiative-view.component';

describe('InnovationInitiativeViewComponent', () => {
  let component: InnovationInitiativeViewComponent;
  let fixture: ComponentFixture<InnovationInitiativeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationInitiativeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationInitiativeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
