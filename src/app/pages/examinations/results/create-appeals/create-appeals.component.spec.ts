import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppealsComponent } from './create-appeals.component';

describe('CreateAppealsComponent', () => {
  let component: CreateAppealsComponent;
  let fixture: ComponentFixture<CreateAppealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAppealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAppealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
