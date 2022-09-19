import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersRequestsComponent } from './letters-requests.component';

describe('LettersRequestsComponent', () => {
  let component: LettersRequestsComponent;
  let fixture: ComponentFixture<LettersRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LettersRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LettersRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
