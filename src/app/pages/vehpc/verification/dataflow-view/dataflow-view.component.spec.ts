import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataflowViewComponent } from './dataflow-view.component';

describe('DataflowViewComponent', () => {
  let component: DataflowViewComponent;
  let fixture: ComponentFixture<DataflowViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataflowViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataflowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
