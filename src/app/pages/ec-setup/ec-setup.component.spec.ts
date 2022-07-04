import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcSetupComponent } from './ec-setup.component';

describe('EcSetupComponent', () => {
  let component: EcSetupComponent;
  let fixture: ComponentFixture<EcSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
