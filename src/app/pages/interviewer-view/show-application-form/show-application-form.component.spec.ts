import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowApplicationFormComponent } from './show-application-form.component';

describe('ShowApplicationFormComponent', () => {
  let component: ShowApplicationFormComponent;
  let fixture: ComponentFixture<ShowApplicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowApplicationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
