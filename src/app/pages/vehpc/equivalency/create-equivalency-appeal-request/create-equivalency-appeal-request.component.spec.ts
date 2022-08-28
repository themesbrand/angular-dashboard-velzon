import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEquivalencyAppealRequestComponent } from './create-equivalency-appeal-request.component';

describe('CreateEquivalencyAppealRequestComponent', () => {
  let component: CreateEquivalencyAppealRequestComponent;
  let fixture: ComponentFixture<CreateEquivalencyAppealRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEquivalencyAppealRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEquivalencyAppealRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
