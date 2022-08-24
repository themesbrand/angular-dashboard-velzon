import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateImmersiveInteractiveRoomComponent } from './create-immersive-interactive-room.component';

describe('CreateImmersiveInteractiveRoomComponent', () => {
  let component: CreateImmersiveInteractiveRoomComponent;
  let fixture: ComponentFixture<CreateImmersiveInteractiveRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateImmersiveInteractiveRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateImmersiveInteractiveRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
