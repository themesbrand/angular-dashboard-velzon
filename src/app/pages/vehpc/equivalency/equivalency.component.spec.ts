import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquivalencyComponent } from './equivalency.component';

describe('EquivalencyComponent', () => {
  let component: EquivalencyComponent;
  let fixture: ComponentFixture<EquivalencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquivalencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquivalencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
