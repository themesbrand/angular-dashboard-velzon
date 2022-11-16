import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaRequestComponent } from './media-request.component';

describe('MediaRequestComponent', () => {
  let component: MediaRequestComponent;
  let fixture: ComponentFixture<MediaRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
