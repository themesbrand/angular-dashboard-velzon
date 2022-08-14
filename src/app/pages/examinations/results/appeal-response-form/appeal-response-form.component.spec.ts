import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppealResponseFormComponent } from './appeal-response-form.component';

describe('AppealResponseFormComponent', () => {
  let component: AppealResponseFormComponent;
  let fixture: ComponentFixture<AppealResponseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppealResponseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppealResponseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
