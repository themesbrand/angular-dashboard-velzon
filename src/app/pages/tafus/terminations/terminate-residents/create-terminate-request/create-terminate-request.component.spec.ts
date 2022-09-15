import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTerminateRequestComponent } from './create-terminate-request.component';

describe('CreateTerminateRequestComponent', () => {
  let component: CreateTerminateRequestComponent;
  let fixture: ComponentFixture<CreateTerminateRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTerminateRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTerminateRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
