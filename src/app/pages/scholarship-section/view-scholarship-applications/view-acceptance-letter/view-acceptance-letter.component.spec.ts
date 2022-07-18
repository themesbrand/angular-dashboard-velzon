import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcceptanceLetterComponent } from './view-acceptance-letter.component';

describe('ViewAcceptanceLetterComponent', () => {
  let component: ViewAcceptanceLetterComponent;
  let fixture: ComponentFixture<ViewAcceptanceLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAcceptanceLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAcceptanceLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
