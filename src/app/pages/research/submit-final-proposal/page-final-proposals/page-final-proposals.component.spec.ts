import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFinalProposalsComponent } from './page-final-proposals.component';

describe('PageFinalProposalsComponent', () => {
  let component: PageFinalProposalsComponent;
  let fixture: ComponentFixture<PageFinalProposalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFinalProposalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFinalProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
