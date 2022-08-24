import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThreedObjectRequestComponent } from './create-threed-object-request.component';

describe('CreateThreedObjectRequestComponent', () => {
  let component: CreateThreedObjectRequestComponent;
  let fixture: ComponentFixture<CreateThreedObjectRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateThreedObjectRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateThreedObjectRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
