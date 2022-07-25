import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceEResourceRequestComponent } from './finance-e-resource-request.component';

describe('FinanceEResourceRequestComponent', () => {
  let component: FinanceEResourceRequestComponent;
  let fixture: ComponentFixture<FinanceEResourceRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceEResourceRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceEResourceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
