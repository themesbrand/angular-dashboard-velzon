import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyMenuComponent } from './verify-menu.component';

describe('VerifyMenuComponent', () => {
  let component: VerifyMenuComponent;
  let fixture: ComponentFixture<VerifyMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
