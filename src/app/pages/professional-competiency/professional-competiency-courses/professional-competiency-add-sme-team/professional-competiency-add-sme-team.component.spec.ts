import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalCompetiencyAddSmeTeamComponent } from './professional-competiency-add-sme-team.component';

describe('ProfessionalCompetiencyAddSmeTeamComponent', () => {
  let component: ProfessionalCompetiencyAddSmeTeamComponent;
  let fixture: ComponentFixture<ProfessionalCompetiencyAddSmeTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalCompetiencyAddSmeTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalCompetiencyAddSmeTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
