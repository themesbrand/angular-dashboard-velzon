import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewChecklistRequestComponent } from './create-new-checklist-request.component';

describe('CreateNewChecklistRequestComponent', () => {
  let component: CreateNewChecklistRequestComponent;
  let fixture: ComponentFixture<CreateNewChecklistRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewChecklistRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewChecklistRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
