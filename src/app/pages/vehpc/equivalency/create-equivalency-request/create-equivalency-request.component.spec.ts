import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEquivalencyRequestComponent } from './create-equivalency-request.component';

describe('CreateEquivalencyRequestComponent', () => {
  let component: CreateEquivalencyRequestComponent;
  let fixture: ComponentFixture<CreateEquivalencyRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEquivalencyRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEquivalencyRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
