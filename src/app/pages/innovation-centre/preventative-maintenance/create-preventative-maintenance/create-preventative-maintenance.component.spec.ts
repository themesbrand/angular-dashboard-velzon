import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePreventativeMaintenanceComponent } from './create-preventative-maintenance.component';

describe('CreatePreventativeMaintenanceComponent', () => {
  let component: CreatePreventativeMaintenanceComponent;
  let fixture: ComponentFixture<CreatePreventativeMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePreventativeMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePreventativeMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
