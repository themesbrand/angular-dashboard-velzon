import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviseEquivalencyLevelComponent } from './revise-equivalency-level.component';

describe('ReviseEquivalencyLevelComponent', () => {
  let component: ReviseEquivalencyLevelComponent;
  let fixture: ComponentFixture<ReviseEquivalencyLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviseEquivalencyLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviseEquivalencyLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
