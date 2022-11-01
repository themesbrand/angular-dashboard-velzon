import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityRequestDirectorComponent } from './activity-request-director.component';

describe('ActivityRequestDirectorComponent', () => {
  let component: ActivityRequestDirectorComponent;
  let fixture: ComponentFixture<ActivityRequestDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityRequestDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityRequestDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
