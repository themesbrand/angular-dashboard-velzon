import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraducationAchievementsPageComponent } from './graducation-achievements-page.component';

describe('GraducationAchievementsPageComponent', () => {
  let component: GraducationAchievementsPageComponent;
  let fixture: ComponentFixture<GraducationAchievementsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraducationAchievementsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraducationAchievementsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
