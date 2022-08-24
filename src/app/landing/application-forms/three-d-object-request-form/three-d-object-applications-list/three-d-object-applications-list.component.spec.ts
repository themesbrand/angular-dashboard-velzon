import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDObjectApplicationsListComponent } from './three-d-object-applications-list.component';

describe('ThreeDObjectApplicationsListComponent', () => {
  let component: ThreeDObjectApplicationsListComponent;
  let fixture: ComponentFixture<ThreeDObjectApplicationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDObjectApplicationsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDObjectApplicationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
