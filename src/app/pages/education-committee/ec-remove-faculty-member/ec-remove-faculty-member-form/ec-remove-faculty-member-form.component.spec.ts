import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcRemoveFacultyMemberFormComponent } from './ec-remove-faculty-member-form.component';

describe('EcRemoveFacultyMemberFormComponent', () => {
  let component: EcRemoveFacultyMemberFormComponent;
  let fixture: ComponentFixture<EcRemoveFacultyMemberFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcRemoveFacultyMemberFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcRemoveFacultyMemberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
