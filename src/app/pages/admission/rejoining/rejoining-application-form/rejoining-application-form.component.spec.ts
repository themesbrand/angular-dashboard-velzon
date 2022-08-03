import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejoiningApplicationFormComponent } from './rejoining-application-form.component';

describe('RejoiningApplicationFormComponent', () => {
  let component: RejoiningApplicationFormComponent;
  let fixture: ComponentFixture<RejoiningApplicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejoiningApplicationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejoiningApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
