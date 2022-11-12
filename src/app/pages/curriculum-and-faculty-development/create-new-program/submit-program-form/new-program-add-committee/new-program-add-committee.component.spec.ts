import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProgramAddCommitteeComponent } from './new-program-add-committee.component';

describe('NewProgramAddCommitteeComponent', () => {
  let component: NewProgramAddCommitteeComponent;
  let fixture: ComponentFixture<NewProgramAddCommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProgramAddCommitteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProgramAddCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
