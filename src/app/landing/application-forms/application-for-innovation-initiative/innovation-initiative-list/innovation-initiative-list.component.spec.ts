import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationInitiativeListComponent } from './innovation-initiative-list.component';

describe('InnovationInitiativeListComponent', () => {
  let component: InnovationInitiativeListComponent;
  let fixture: ComponentFixture<InnovationInitiativeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationInitiativeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationInitiativeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
