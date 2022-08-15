import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEquivalencyListComponent } from './view-equivalency-list.component';

describe('ViewEquivalencyListComponent', () => {
  let component: ViewEquivalencyListComponent;
  let fixture: ComponentFixture<ViewEquivalencyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEquivalencyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEquivalencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
