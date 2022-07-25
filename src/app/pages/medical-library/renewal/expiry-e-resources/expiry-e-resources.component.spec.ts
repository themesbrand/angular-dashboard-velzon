import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiryEResourcesComponent } from './expiry-e-resources.component';

describe('ExpiryEResourcesComponent', () => {
  let component: ExpiryEResourcesComponent;
  let fixture: ComponentFixture<ExpiryEResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpiryEResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiryEResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
