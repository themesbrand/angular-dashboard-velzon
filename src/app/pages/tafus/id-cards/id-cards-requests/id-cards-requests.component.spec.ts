import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCardsRequestsComponent } from './id-cards-requests.component';

describe('IdCardsRequestsComponent', () => {
  let component: IdCardsRequestsComponent;
  let fixture: ComponentFixture<IdCardsRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdCardsRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdCardsRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
