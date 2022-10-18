import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcAddFacultyMemberComponent } from './ec-add-faculty-member.component';

describe('EcAddFacultyMemberComponent', () => {
  let component: EcAddFacultyMemberComponent;
  let fixture: ComponentFixture<EcAddFacultyMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcAddFacultyMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcAddFacultyMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
