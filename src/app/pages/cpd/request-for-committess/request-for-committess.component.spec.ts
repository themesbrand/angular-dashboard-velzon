import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForCommittessComponent } from './request-for-committess.component';

describe('RequestForCommittessComponent', () => {
  let component: RequestForCommittessComponent;
  let fixture: ComponentFixture<RequestForCommittessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestForCommittessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestForCommittessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
