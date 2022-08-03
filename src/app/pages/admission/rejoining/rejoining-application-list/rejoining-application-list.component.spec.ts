import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejoiningApplicationListComponent } from './rejoining-application-list.component';

describe('RejoiningApplicationListComponent', () => {
  let component: RejoiningApplicationListComponent;
  let fixture: ComponentFixture<RejoiningApplicationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejoiningApplicationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejoiningApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
