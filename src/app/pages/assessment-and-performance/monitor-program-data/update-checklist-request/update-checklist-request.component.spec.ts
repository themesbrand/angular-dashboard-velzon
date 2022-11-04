import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChecklistRequestComponent } from './update-checklist-request.component';

describe('UpdateChecklistRequestComponent', () => {
  let component: UpdateChecklistRequestComponent;
  let fixture: ComponentFixture<UpdateChecklistRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateChecklistRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateChecklistRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
