import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcRemoveMemberViewComponent } from './ec-remove-member-view.component';

describe('EcRemoveMemberViewComponent', () => {
  let component: EcRemoveMemberViewComponent;
  let fixture: ComponentFixture<EcRemoveMemberViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcRemoveMemberViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcRemoveMemberViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
