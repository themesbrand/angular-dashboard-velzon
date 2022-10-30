import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionFormRequestViewComponent } from './extension-form-request-view.component';

describe('ExtensionFormRequestViewComponent', () => {
  let component: ExtensionFormRequestViewComponent;
  let fixture: ComponentFixture<ExtensionFormRequestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtensionFormRequestViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensionFormRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
