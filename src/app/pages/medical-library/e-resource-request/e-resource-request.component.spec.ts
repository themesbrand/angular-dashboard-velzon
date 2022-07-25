import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EResourceRequestComponent } from './e-resource-request.component';

describe('EResourceRequestComponent', () => {
  let component: EResourceRequestComponent;
  let fixture: ComponentFixture<EResourceRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EResourceRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EResourceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
