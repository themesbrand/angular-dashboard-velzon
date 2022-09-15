import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminateResidentsComponent } from './terminate-residents.component';

describe('TerminateResidentsComponent', () => {
  let component: TerminateResidentsComponent;
  let fixture: ComponentFixture<TerminateResidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminateResidentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminateResidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
