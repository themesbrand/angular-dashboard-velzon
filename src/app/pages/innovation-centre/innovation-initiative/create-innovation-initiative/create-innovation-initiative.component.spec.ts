import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInnovationInitiativeComponent } from './create-innovation-initiative.component';

describe('CreateInnovationInitiativeComponent', () => {
  let component: CreateInnovationInitiativeComponent;
  let fixture: ComponentFixture<CreateInnovationInitiativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInnovationInitiativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInnovationInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
