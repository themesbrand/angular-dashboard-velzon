import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEquivalencyRequestsComponent } from './page-equivalency-requests.component';

describe('PageEquivalencyRequestsComponent', () => {
  let component: PageEquivalencyRequestsComponent;
  let fixture: ComponentFixture<PageEquivalencyRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEquivalencyRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEquivalencyRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
