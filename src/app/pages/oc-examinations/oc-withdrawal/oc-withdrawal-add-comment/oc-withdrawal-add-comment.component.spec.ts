import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcWithdrawalAddCommentComponent } from './oc-withdrawal-add-comment.component';

describe('OcWithdrawalAddCommentComponent', () => {
  let component: OcWithdrawalAddCommentComponent;
  let fixture: ComponentFixture<OcWithdrawalAddCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcWithdrawalAddCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcWithdrawalAddCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
