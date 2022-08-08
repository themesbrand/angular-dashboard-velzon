import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeDatabaseComponent } from './trainee-database.component';

describe('TraineeDatabaseComponent', () => {
  let component: TraineeDatabaseComponent;
  let fixture: ComponentFixture<TraineeDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
