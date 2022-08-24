import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageImmersiveInteractiveRoomComponent } from './page-immersive-interactive-room.component';

describe('PageImmersiveInteractiveRoomComponent', () => {
  let component: PageImmersiveInteractiveRoomComponent;
  let fixture: ComponentFixture<PageImmersiveInteractiveRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageImmersiveInteractiveRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageImmersiveInteractiveRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
