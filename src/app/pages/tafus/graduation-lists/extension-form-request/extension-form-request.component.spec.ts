import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionFormRequestComponent } from './extension-form-request.component';

describe('ExtensionFormRequestComponent', () => {
  let component: ExtensionFormRequestComponent;
  let fixture: ComponentFixture<ExtensionFormRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtensionFormRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensionFormRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
