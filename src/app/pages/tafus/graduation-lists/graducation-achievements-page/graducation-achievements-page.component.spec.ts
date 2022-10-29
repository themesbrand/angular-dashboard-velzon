import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduationAchievementsPageComponent } from './graducation-achievements-page.component';

describe('GraducationAchievementsPageComponent', () => {
  let component: GraduationAchievementsPageComponent;
  let fixture: ComponentFixture<GraduationAchievementsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduationAchievementsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduationAchievementsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
