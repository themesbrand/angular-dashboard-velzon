import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageThreedObjectRequestComponent } from './page-threed-object-request.component';

describe('PageThreedObjectRequestComponent', () => {
  let component: PageThreedObjectRequestComponent;
  let fixture: ComponentFixture<PageThreedObjectRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageThreedObjectRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageThreedObjectRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
