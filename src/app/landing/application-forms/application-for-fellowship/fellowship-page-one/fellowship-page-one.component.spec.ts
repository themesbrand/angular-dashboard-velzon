import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FellowshipPageOneComponent } from './fellowship-page-one.component';

describe('FellowshipPageOneComponent', () => {
  let component: FellowshipPageOneComponent;
  let fixture: ComponentFixture<FellowshipPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FellowshipPageOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FellowshipPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
