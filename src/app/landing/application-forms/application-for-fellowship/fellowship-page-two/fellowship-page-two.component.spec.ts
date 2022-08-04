import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FellowshipPageTwoComponent } from './fellowship-page-two.component';

describe('FellowshipPageTwoComponent', () => {
  let component: FellowshipPageTwoComponent;
  let fixture: ComponentFixture<FellowshipPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FellowshipPageTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FellowshipPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
