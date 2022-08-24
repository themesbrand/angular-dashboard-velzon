import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRepairRequestsComponent } from './create-repair-requests.component';

describe('CreateRepairRequestsComponent', () => {
  let component: CreateRepairRequestsComponent;
  let fixture: ComponentFixture<CreateRepairRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRepairRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRepairRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
