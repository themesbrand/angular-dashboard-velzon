import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionRequiredListComponent } from './extension-required-list.component';

describe('ExtensionRequiredListComponent', () => {
  let component: ExtensionRequiredListComponent;
  let fixture: ComponentFixture<ExtensionRequiredListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtensionRequiredListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensionRequiredListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
