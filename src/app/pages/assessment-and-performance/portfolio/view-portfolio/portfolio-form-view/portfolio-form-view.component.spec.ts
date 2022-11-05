import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFormViewComponent } from './portfolio-form-view.component';

describe('PortfolioFormViewComponent', () => {
  let component: PortfolioFormViewComponent;
  let fixture: ComponentFixture<PortfolioFormViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioFormViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
