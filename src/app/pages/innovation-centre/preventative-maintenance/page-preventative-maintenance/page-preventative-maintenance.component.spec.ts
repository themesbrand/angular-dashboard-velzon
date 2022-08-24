import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePreventativeMaintenanceComponent } from './page-preventative-maintenance.component';

describe('PagePreventativeMaintenanceComponent', () => {
  let component: PagePreventativeMaintenanceComponent;
  let fixture: ComponentFixture<PagePreventativeMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePreventativeMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePreventativeMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
