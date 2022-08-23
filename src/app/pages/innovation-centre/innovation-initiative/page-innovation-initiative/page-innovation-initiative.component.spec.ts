import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInnovationInitiativeComponent } from './page-innovation-initiative.component';

describe('PageInnovationInitiativeComponent', () => {
  let component: PageInnovationInitiativeComponent;
  let fixture: ComponentFixture<PageInnovationInitiativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageInnovationInitiativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInnovationInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
