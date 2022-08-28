import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEquivalencyAppealsComponent } from './page-equivalency-appeals.component';

describe('PageEquivalencyAppealsComponent', () => {
  let component: PageEquivalencyAppealsComponent;
  let fixture: ComponentFixture<PageEquivalencyAppealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEquivalencyAppealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEquivalencyAppealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
