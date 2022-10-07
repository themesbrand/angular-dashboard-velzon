import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcRemoveMemberFormComponent } from './ec-remove-member-form.component';

describe('EcRemoveMemberFormComponent', () => {
  let component: EcRemoveMemberFormComponent;
  let fixture: ComponentFixture<EcRemoveMemberFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcRemoveMemberFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcRemoveMemberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
