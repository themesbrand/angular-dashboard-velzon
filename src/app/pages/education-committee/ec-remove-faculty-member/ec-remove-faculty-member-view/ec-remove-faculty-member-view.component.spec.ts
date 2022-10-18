import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcRemoveFacultyMemberViewComponent } from './ec-remove-faculty-member-view.component';

describe('EcRemoveFacultyMemberViewComponent', () => {
  let component: EcRemoveFacultyMemberViewComponent;
  let fixture: ComponentFixture<EcRemoveFacultyMemberViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcRemoveFacultyMemberViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcRemoveFacultyMemberViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
