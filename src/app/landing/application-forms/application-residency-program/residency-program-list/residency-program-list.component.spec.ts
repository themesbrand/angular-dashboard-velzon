import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidencyProgramListComponent } from './residency-program-list.component';

describe('ResidencyProgramListComponent', () => {
  let component: ResidencyProgramListComponent;
  let fixture: ComponentFixture<ResidencyProgramListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidencyProgramListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidencyProgramListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
