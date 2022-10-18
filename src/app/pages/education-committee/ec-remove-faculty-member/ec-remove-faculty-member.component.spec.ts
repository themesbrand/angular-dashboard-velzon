import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcRemoveFacultyMemberComponent } from './ec-remove-faculty-member.component';

describe('EcRemoveFacultyMemberComponent', () => {
  let component: EcRemoveFacultyMemberComponent;
  let fixture: ComponentFixture<EcRemoveFacultyMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcRemoveFacultyMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcRemoveFacultyMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
