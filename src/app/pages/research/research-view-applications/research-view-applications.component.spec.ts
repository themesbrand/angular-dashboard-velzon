import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchViewApplicationsComponent } from './research-view-applications.component';

describe('ResearchViewApplicationsComponent', () => {
  let component: ResearchViewApplicationsComponent;
  let fixture: ComponentFixture<ResearchViewApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchViewApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchViewApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
