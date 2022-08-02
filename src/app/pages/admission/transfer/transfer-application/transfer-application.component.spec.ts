import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferApplicationComponent } from './transfer-application.component';

describe('TransferApplicationComponent', () => {
  let component: TransferApplicationComponent;
  let fixture: ComponentFixture<TransferApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
