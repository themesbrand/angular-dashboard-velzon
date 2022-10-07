import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcRemoveMembersComponent } from './ec-remove-members.component';

describe('EcRemoveMembersComponent', () => {
  let component: EcRemoveMembersComponent;
  let fixture: ComponentFixture<EcRemoveMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcRemoveMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcRemoveMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
