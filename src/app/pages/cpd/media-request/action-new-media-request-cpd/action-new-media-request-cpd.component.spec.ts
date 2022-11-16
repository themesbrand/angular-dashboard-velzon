import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionNewMediaRequestCpdComponent } from './action-new-media-request-cpd.component';

describe('ActionNewMediaRequestCpdComponent', () => {
  let component: ActionNewMediaRequestCpdComponent;
  let fixture: ComponentFixture<ActionNewMediaRequestCpdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionNewMediaRequestCpdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionNewMediaRequestCpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
