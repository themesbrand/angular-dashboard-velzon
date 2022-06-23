import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentBlockDiagramComponent } from './resident-block-diagram.component';

describe('ResidentBlockDiagramComponent', () => {
  let component: ResidentBlockDiagramComponent;
  let fixture: ComponentFixture<ResidentBlockDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentBlockDiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentBlockDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
