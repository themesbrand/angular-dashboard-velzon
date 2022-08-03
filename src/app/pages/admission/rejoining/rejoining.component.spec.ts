import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejoiningComponent } from './rejoining.component';

describe('RejoiningComponent', () => {
  let component: RejoiningComponent;
  let fixture: ComponentFixture<RejoiningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejoiningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejoiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
