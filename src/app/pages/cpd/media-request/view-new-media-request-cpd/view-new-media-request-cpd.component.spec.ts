import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewMediaRequestCpdComponent } from './view-new-media-request-cpd.component';

describe('ViewNewMediaRequestCpdComponent', () => {
  let component: ViewNewMediaRequestCpdComponent;
  let fixture: ComponentFixture<ViewNewMediaRequestCpdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNewMediaRequestCpdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNewMediaRequestCpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
