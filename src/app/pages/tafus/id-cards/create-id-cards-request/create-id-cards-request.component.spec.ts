import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIdCardsRequestComponent } from './create-id-cards-request.component';

describe('CreateIdCardsRequestComponent', () => {
  let component: CreateIdCardsRequestComponent;
  let fixture: ComponentFixture<CreateIdCardsRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIdCardsRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIdCardsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
