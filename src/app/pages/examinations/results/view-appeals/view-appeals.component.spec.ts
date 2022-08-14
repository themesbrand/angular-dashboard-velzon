import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppealsComponent } from './view-appeals.component';

describe('ViewAppealsComponent', () => {
  let component: ViewAppealsComponent;
  let fixture: ComponentFixture<ViewAppealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
