import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMediaRequestCpdComponent } from './add-new-media-request-cpd.component';

describe('AddNewMediaRequestCpdComponent', () => {
  let component: AddNewMediaRequestCpdComponent;
  let fixture: ComponentFixture<AddNewMediaRequestCpdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewMediaRequestCpdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewMediaRequestCpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
