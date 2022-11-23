import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadingTwoFooterComponent } from './lading-two-footer.component';

describe('LadingTwoFooterComponent', () => {
  let component: LadingTwoFooterComponent;
  let fixture: ComponentFixture<LadingTwoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadingTwoFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LadingTwoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
