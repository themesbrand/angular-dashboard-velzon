import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalCompetiencyAddCommentsComponent } from './professional-competiency-add-comments.component';

describe('ProfessionalCompetiencyAddCommentsComponent', () => {
  let component: ProfessionalCompetiencyAddCommentsComponent;
  let fixture: ComponentFixture<ProfessionalCompetiencyAddCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalCompetiencyAddCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalCompetiencyAddCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
