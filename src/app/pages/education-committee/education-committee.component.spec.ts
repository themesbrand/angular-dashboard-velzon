import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCommitteeComponent } from './education-committee.component';

describe('EducationCommitteeComponent', () => {
  let component: EducationCommitteeComponent;
  let fixture: ComponentFixture<EducationCommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationCommitteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
