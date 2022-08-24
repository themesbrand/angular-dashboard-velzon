import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRepairRequestsComponent } from './page-repair-requests.component';

describe('PageRepairRequestsComponent', () => {
  let component: PageRepairRequestsComponent;
  let fixture: ComponentFixture<PageRepairRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRepairRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRepairRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
