import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcAddMembersComponent } from './ec-add-members.component';

describe('EcAddMembersComponent', () => {
  let component: EcAddMembersComponent;
  let fixture: ComponentFixture<EcAddMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcAddMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcAddMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
