import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferViewApplicationComponent } from './transfer-view-application.component';

describe('TransferViewApplicationComponent', () => {
  let component: TransferViewApplicationComponent;
  let fixture: ComponentFixture<TransferViewApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferViewApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferViewApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
