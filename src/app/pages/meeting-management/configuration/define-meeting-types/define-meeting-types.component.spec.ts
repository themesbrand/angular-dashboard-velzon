import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineMeetingTypesComponent } from './define-meeting-types.component';

describe('DefineMeetingTypesComponent', () => {
  let component: DefineMeetingTypesComponent;
  let fixture: ComponentFixture<DefineMeetingTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefineMeetingTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineMeetingTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
