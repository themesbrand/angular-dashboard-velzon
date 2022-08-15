import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnEquivalencyRequestComponent } from './return-equivalency-request.component';

describe('ReturnEquivalencyRequestComponent', () => {
  let component: ReturnEquivalencyRequestComponent;
  let fixture: ComponentFixture<ReturnEquivalencyRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnEquivalencyRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnEquivalencyRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
