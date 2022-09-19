import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLettersRequestComponent } from './create-letters-request.component';

describe('CreateLettersRequestComponent', () => {
  let component: CreateLettersRequestComponent;
  let fixture: ComponentFixture<CreateLettersRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLettersRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLettersRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
